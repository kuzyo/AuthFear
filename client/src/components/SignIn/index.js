import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SignInForm from "./SignInForm";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

const SignIn = ({ classes }) => {
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="headline" component="h3">
        Sign In
      </Typography>
      <SignInForm />
    </Paper>
  );
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
