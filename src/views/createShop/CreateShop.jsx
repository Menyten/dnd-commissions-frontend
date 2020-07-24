import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import View from '../../components/common/viewTemplate';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';

import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/createShop';

import { GlobalContext } from '../../context/GlobalState';
import { showToast } from '../../context/actions/toastActions';

const CreateShop = () => {
  const { dispatch } = useContext(GlobalContext);
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async data => {
    const res = await fetchy(query, data);
    if (!res.ok) {
      return dispatch(showToast('error', res.data.errors[0].message));
    }
    dispatch(showToast('success', 'Shop created'));
    return history.push('/shop');
  };

  return (
    <View>
      <Box component="form" mt={2} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Shop
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="shopTitle"
              variant="outlined"
              label="Shop Title"
              required
              fullWidth
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="shopDescription"
              variant="outlined"
              label="Shop Description"
              required
              fullWidth
              multiline
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Box mt={4}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create
          </Button>
        </Box>
      </Box>
    </View>
  );
};

export default CreateShop;
