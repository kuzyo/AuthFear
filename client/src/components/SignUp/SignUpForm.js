import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import { signUp } from "../../actions/auth";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  }
});

const SignUpForm = ({ classes, signUp }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }}
      onSubmit={values => {
        signUp(values);
      }}
      render={({ values, handleChange, handleSubmit }) => (
        <form className={classes.container} onSubmit={handleSubmit}>
          <TextField
            id="firstName"
            label="First Name"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            id="lastName"
            label="Last Name"
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

export default compose(connect(null, { signUp }), withStyles(styles))(
  SignUpForm
);
