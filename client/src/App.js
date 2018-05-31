import React from "react";
import AppBar from "./components/AppBar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Grid from "@material-ui/core/Grid";

const App = () => (
  <div>
    <AppBar />
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
  </div>
);

export default App;
