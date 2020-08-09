import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import View from '../../components/common/viewTemplate';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { GlobalContext } from '../../context/GlobalState';
import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/product';

const Product = () => {
  const { state } = useContext(GlobalContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { productTitle, productDescription, price, shop } = product;
  const { shopTitle, shopDescription } = shop ?? {};

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetchy(query, { id });
      setProduct(res.data.data.product);
    };
    fetchProduct();
  }, []);

  const AddToCart = () => (
    <>
      <Typography variant="h5" component="h2" gutterBottom>
        Add to cart
      </Typography>
      <Grid container spacing={2} component="form">
        <Grid item xs={12}>
          <TextField
            label="Order Description"
            variant="outlined"
            helperText="Provide a detailed description to help the artist"
            fullWidth
            multiline
            rows="5"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </>
  );

  return (
    <View>
      <Box mt={3}>
        <Typography variant="h5" component="h2" gutterBottom>
          {shopTitle}
        </Typography>
        <Typography color="textSecondary">{shopDescription}</Typography>
        <Box my={1}>
          <Divider />
        </Box>
        <Typography variant="h5" component="h2" gutterBottom>
          {productTitle}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {productDescription}
        </Typography>
        <Typography color="textSecondary">{price} SEK</Typography>
      </Box>
      <Box my={1}>
        <Divider />
      </Box>
      {state.user && <AddToCart />}
    </View>
  );
};

export default Product;
