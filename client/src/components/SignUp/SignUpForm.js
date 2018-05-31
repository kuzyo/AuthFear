import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  }
});

const SignUpForm = ({ classes }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: ""
      }}
      onSubmit={values => {
        console.log(values);
      }}
      render={({ values, handleChange, handleSubmit }) => (
        <form className={classes.container} onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Name"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            id="surname"
            label="Surname"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            onChange={handleChange}
          />
          <Button variant="raised" color="secondary" type="submit">
            Sign up
          </Button>
        </form>
      )}
    />
  );
};

export default withStyles(styles)(SignUpForm);
