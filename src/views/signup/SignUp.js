import React from 'react';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  Button
} from '@material-ui/core';

import signupStyles from '../../styles/signup/signupStyles';
import NavBar from '../../components/common/navbar/NavBar';

const SignUp = () => {
  const classes = signupStyles();

  return (
    <>
      <NavBar />
      <Container>
        <Paper className={classes.root} component="form">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="center" variant="h4">
                Sign up
              </Typography>
              <Typography component="p" align="center" variant="caption">
                It's free!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Username" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="date"
                InputLabelProps={{ shrink: true }}
                label="Date of birth"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Repeat password" required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                fullWidth
              >
                sign up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default SignUp;
