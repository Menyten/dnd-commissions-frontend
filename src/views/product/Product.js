import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Box,
  Divider,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../../components/common/navbar/NavBar';
import { fetchy } from '../../utils/fetchy';
import query from '../../graphql/queries/fetchProduct';

const useStyles = makeStyles({
  divider: {
    width: '100%',
    height: '1px'
  }
});

const Product = () => {
  const classes = useStyles();
  const { productId } = useParams();
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetchy.post('', {
        query,
        variables: {
          productId
        }
      });
      const data = await res.json();
      const parsed = data.data.fetchProduct;
      setProductTitle(parsed.productTitle);
      setProductDescription(parsed.productDescription);
      setPrice(parsed.price);
    };
    fetchProduct();
  }, [productId]);

  return (
    <>
      <NavBar />
      <Container>
        <Box marginTop="2rem">
          <Grid container component={Paper} spacing={3}>
            <Grid item xs={6}>
              <Typography variant="h4" gutterBottom>
                {productTitle}
              </Typography>
              <Typography gutterBottom>{productDescription}</Typography>
              <Typography>Price: {price}</Typography>
            </Grid>
            <Grid item xs={6}>
              shop info etc.
            </Grid>
            <Divider className={classes.divider} orientation="horizontal" />
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Order
              </Typography>
              <TextField
                variant="outlined"
                label="Order description"
                placeholder="Type your description here..."
                rows={5}
                fullWidth
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="end">
                <Button variant="contained" color="primary" size="large">
                  Add to cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Product;
