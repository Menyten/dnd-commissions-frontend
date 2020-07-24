import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import View from '../../components/common/viewTemplate';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MUILink from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';

import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/login';

import { GlobalContext } from '../../context/GlobalState';
import { showToast } from '../../context/actions/toastActions';
import { login } from '../../context/actions/authActions';

const Login = () => {
  const { dispatch } = useContext(GlobalContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    const res = await fetchy(query, data);
    if (!res.ok) {
      return dispatch(showToast('error', res.data.errors[0].message));
    }
    return dispatch(login(res.data.data.login.user));
  };

  return (
    <View>
      <Box component="form" mt={2} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="email"
              name="email"
              variant="outlined"
              label="Email"
              required
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              name="password"
              variant="outlined"
              label="Password"
              required
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12}>
            <MUILink variant="body2" component={Link} to="/create-account">
              Forgot password?
            </MUILink>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </Box>
    </View>
  );
};

export default Login;
