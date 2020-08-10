import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const AddToCart = ({
  orderDescription,
  setOrderDescription,
  addProductToCart
}) => (
  <>
    <Typography variant="h5" component="h2" gutterBottom>
      Add to cart
    </Typography>
    <Grid container spacing={2} component="form" onSubmit={addProductToCart}>
      <Grid item xs={12}>
        <TextField
          label="Order Description"
          variant="outlined"
          helperText="Provide a detailed description to help the artist"
          required
          fullWidth
          multiline
          rows="5"
          value={orderDescription}
          onChange={e => setOrderDescription(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add to cart
        </Button>
      </Grid>
    </Grid>
  </>
);

export default AddToCart;
