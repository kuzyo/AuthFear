import React from 'react';
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Grid from "@material-ui/core/Grid";

const Landing = () => {
  return (
    <Grid container spacing={0} justify="center">
      <Grid container item xs={8} alignItems="center">
        <Grid item xs={6}>
          <SignIn />
        </Grid>
        <Grid item xs={6}>
          <SignUp />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Landing;