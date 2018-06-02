import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { signIn } from "../../actions/auth";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  }
});

const SignInForm = ({ classes, signIn }) => {
  return (
    <Formik
      initialValues={{
        userEmail: "",
        userPassword: ""
      }}
      onSubmit={values => {
        signIn(values);
      }}
      render={({ values, handleChange, handleSubmit }) => (
        <form className={classes.container} onSubmit={handleSubmit}>
          <TextField
            id="userEmail"
            label="Email"
            type="email"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            id="userPassword"
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

export default compose(connect(null, { signIn }), withStyles(styles))(
  SignInForm
);
