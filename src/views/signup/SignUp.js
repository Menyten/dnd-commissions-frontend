import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button
} from '@material-ui/core';

import formStyles from '../../styles/common/form/formStyles';
import NavBar from '../../components/common/navbar/NavBar';
import Form from '../../components/common/form/Form';

import { fetchy } from '../../utils/fetchy';
import { getFieldErrorMessages } from '../../utils/fieldErrorMessages';
import query from '../../graphql/queries/signUp';

const SignUp = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const classes = formStyles();

  const handleErrors = fieldName => getFieldErrorMessages(errors, fieldName);

  const onSubmit = async data => {
    await fetchy.post('', {
      query,
      variables: {
        ...data
      }
    });
  };

  return (
    <>
      <NavBar />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                error={!!handleErrors('username')}
                helperText={handleErrors('username')}
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
                error={!!handleErrors('firstname')}
                helperText={handleErrors('firstname')}
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
                error={!!handleErrors('lastname')}
                helperText={handleErrors('lastname')}
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
                error={!!handleErrors('email')}
                helperText={handleErrors('email')}
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
                error={!!handleErrors('age')}
                helperText={handleErrors('age')}
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
                error={!!handleErrors('password')}
                helperText={handleErrors('password')}
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
                error={!!handleErrors('passwordRepeat')}
                helperText={handleErrors('passwordRepeat')}
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
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
