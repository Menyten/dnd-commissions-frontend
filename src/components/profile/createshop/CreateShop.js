import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Box, Button } from '@material-ui/core';

import { fetchy } from '../../../utils/fetchy';
import { getFieldErrorMessages } from '../../../utils/fieldErrorMessages';
import query from '../../../graphql/queries/createShop';

const CreateShop = () => {
  const { register, handleSubmit, errors } = useForm();

  const createShop = async data => {
    const res = await fetchy.post('', {
      query,
      variables: {
        ...data
      }
    });
    console.log(await res.json());
    console.log('created');
  };

  const handleErrors = fieldName => getFieldErrorMessages(errors, fieldName);

  return (
    <form onSubmit={handleSubmit(createShop)} noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Shop title"
            name="shopTitle"
            required
            fullWidth
            error={!!handleErrors('shopTitle')}
            helperText={handleErrors('shopTitle')}
            inputRef={register({
              required: true
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Shop description"
            name="shopDescription"
            required
            fullWidth
            multiline
            error={!!handleErrors('shopDescription')}
            helperText={handleErrors('shopDescription')}
            inputRef={register({
              required: true
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <Box marginTop="1rem" display="flex" justifyContent="flex-end">
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateShop;
