import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const CreateShop = () => (
  <>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField label="Shop title" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Shop description" fullWidth multiline />
      </Grid>
    </Grid>
  </>
);

export default CreateShop;
