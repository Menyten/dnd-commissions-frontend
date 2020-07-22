import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers';
import View from '../../components/common/viewTemplate';
import { useForm } from 'react-hook-form';

import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/createAccount';

const CreateAccount = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async data => {
    const res = await fetchy.post({
      query,
      variables: {
        ...data
      }
    });
    console.log(res);
  };

  return (
    <View>
      <Box component="form" mt={2} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" align="center">
          Create Account
        </Typography>
        <Typography variant="caption" component="p" align="center" gutterBottom>
          It's free!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="username"
              variant="outlined"
              label="Username"
              required
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="firstname"
              variant="outlined"
              label="First name"
              required
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="lastname"
              variant="outlined"
              label="Last name"
              required
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
              type="date"
              name="birthdate"
              variant="outlined"
              label="Birth date"
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
              inputRef={register}
            /> */}
            <DatePicker inputVariant="outlined" fullWidth />
          </Grid>
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
        </Grid>
        <Box mt={4}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
    </View>
  );
};

export default CreateAccount;
