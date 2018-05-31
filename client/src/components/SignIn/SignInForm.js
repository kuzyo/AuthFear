import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  }
});

const SignInForm = ({ classes }) => {
  return (
    <Formik
      initialValues={{
        user_email: "",
        user_password: ""
      }}
      onSubmit={values => {
        console.log(values);
      }}
      render={({ values, handleChange, handleSubmit }) => (
        <form className={classes.container} onSubmit={handleSubmit}>
          <TextField
            id="user_email"
            label="Email"
            type="email"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            id="user_password"
            label="Password"
            type="password"
            margin="normal"
            onChange={handleChange}
          />
          <Button variant="raised" color="primary" type="submit">
            Sign in
          </Button>
        </form>
      )}
    />
  );
};

export default withStyles(styles)(SignInForm);
