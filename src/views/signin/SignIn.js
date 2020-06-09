import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button
} from '@material-ui/core';

import { GlobalContext } from '../../context/GlobalState';
import { showSnackbar } from '../../context/actions/snackbarActions';
import { setUser, setToken } from '../../context/actions/authActions';
import { fetchy } from '../../utils/fetchy';
import { getFieldErrorMessages } from '../../utils/fieldErrorMessages';
import query from '../../graphql/queries/signIn';

import formStyles from '../../styles/common/form/formStyles';
import NavBar from '../../components/common/navbar/NavBar';
import Form from '../../components/common/form/Form';

const SignIn = () => {
  const { dispatch } = useContext(GlobalContext);
  const { register, errors, handleSubmit } = useForm();
  const classes = formStyles();

  const onSubmit = async data => {
    const res = await fetchy.post('', {
      query,
      variables: {
        ...data
      }
    });
    if (!res.ok) {
      return dispatch(
        showSnackbar('error', 'Wrong username or password. Please try again!')
      );
    }
    const parsed = await res.json();
    dispatch(setToken(parsed.data.signIn.token));
    dispatch(setUser(parsed.data.signIn.user));
  };

  const handleErrors = fieldName => getFieldErrorMessages(errors, fieldName);

  return (
    <>
      <NavBar />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="center" variant="h4">
                Sign in
              </Typography>
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
                inputRef={register({ required: true })}
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
                inputRef={register({ required: true })}
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
                sign in
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Container>
    </>
  );
};

export default SignIn;
