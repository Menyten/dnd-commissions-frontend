import React from 'react';
import { useForm } from 'react-hook-form';
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

import { fetchy } from '../../utils/fetchy';

const SignUp = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const classes = signupStyles();

  const query = /* GraphQL */ `
    mutation(
      $username: String!
      $firstname: String!
      $lastname: String!
      $email: String!
      $password: String!
      $age: String!
    ) {
      createAccount(
        accountInput: {
          username: $username
          firstname: $firstname
          lastname: $lastname
          email: $email
          password: $password
          age: $age
        }
      )
    }
  `;

  const onSubmit = async values => {
    const res = await fetchy.post('', {
      query,
      variables: {
        ...values
      }
    });
    console.log(await res.json());
  };

  const handleFieldErrorMessages = name => {
    if (errors[name] && errors[name].type === 'required')
      return 'This field is required';
    if (errors[name] && errors[name].type === 'minLength')
      return 'Username must be a minimum of 8 characters.';
    if (errors[name] && errors[name].type === 'pattern')
      return 'Incorrect email address.';
    if (errors[name] && errors[name].type === 'validate')
      return 'Must be the same as password';
  };

  return (
    <>
      <NavBar />
      <Container>
        <Paper
          className={classes.root}
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
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
              <TextField
                label="Username"
                name="username"
                required
                fullWidth
                error={!!handleFieldErrorMessages('username')}
                helperText={handleFieldErrorMessages('username')}
                inputRef={register({
                  required: true
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="First name"
                name="firstname"
                required
                fullWidth
                error={!!handleFieldErrorMessages('firstname')}
                helperText={handleFieldErrorMessages('firstname')}
                inputRef={register({
                  required: true
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last name"
                name="lastname"
                required
                fullWidth
                error={!!handleFieldErrorMessages('lastname')}
                helperText={handleFieldErrorMessages('lastname')}
                inputRef={register({
                  required: true
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Email"
                name="email"
                required
                fullWidth
                error={!!handleFieldErrorMessages('email')}
                helperText={handleFieldErrorMessages('email')}
                inputRef={register({
                  required: true,
                  pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="date"
                label="Date of birth"
                name="age"
                InputLabelProps={{ shrink: true }}
                required
                fullWidth
                error={!!handleFieldErrorMessages('age')}
                helperText={handleFieldErrorMessages('age')}
                inputRef={register({
                  required: true
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                name="password"
                required
                fullWidth
                error={!!handleFieldErrorMessages('password')}
                helperText={handleFieldErrorMessages('password')}
                inputRef={register({
                  required: true,
                  minLength: 8
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Repeat password"
                name="passwordRepeat"
                required
                fullWidth
                error={!!handleFieldErrorMessages('passwordRepeat')}
                helperText={handleFieldErrorMessages('passwordRepeat')}
                inputRef={register({
                  validate: value => value === watch('password')
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
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
