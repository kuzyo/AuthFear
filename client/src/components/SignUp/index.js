import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SignUpForm from "./SignUpForm";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  })
});

const SignUp = props => {
  const { classes } = props;
  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="headline" component="h3">
        Sign Up
      </Typography>
      <SignUpForm />
    </Paper>
  );
};

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUp);
