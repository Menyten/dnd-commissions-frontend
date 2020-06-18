import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  Box
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

import NavBar from '../../components/common/navbar/NavBar';
import ShopCard from '../../components/start/card/ShopCard';
import ProductModal from '../../components/shop/modals/ProductModal';
import ShopOwner from '../../components/shop/shopowner/ShopOwner';

import { GlobalContext } from '../../context/GlobalState';
import { setShop } from '../../context/actions/shopActions';
import { fetchy } from '../../utils/fetchy';
import query from '../../graphql/queries/fetchShop';
import shopStyles from '../../styles/shop/shopStyles';

import template from '../../assets/template.jpg';

const Shop = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const { shop } = state;
  const { shopId } = useParams();
  const classes = shopStyles();
  const [productDialogOpen, setProductDialogOpen] = useState(false);

  useEffect(() => {
    const fetchShop = async () => {
      const res = await fetchy.post('', {
        query,
        variables: {
          shopId
        }
      });
      const data = await res.json();
      dispatch(setShop(data.data.fetchShop));
    };
    fetchShop();
  }, [dispatch, shopId]);

  const toggleProductDialog = () => setProductDialogOpen(!productDialogOpen);

  const renderProducts = () =>
    shop?.products.map(({ _id, price, productTitle, productDescription }) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={_id}>
        <ShopCard
          image={template}
          title={productTitle}
          description={productDescription}
          price={price}
        />
      </Grid>
    ));

  return (
    <>
      <NavBar />
      <ProductModal
        open={productDialogOpen}
        toggleDialog={toggleProductDialog}
      />
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Paper className={classes.banner}>
              {/* eslint-disable-next-line */}
              <img className={classes.image} src={template} alt="Shop image" />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h3">{shop?.shopTitle}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Typography variant="h4">Products</Typography>
                  <ShopOwner>
                    <IconButton onClick={toggleProductDialog}>
                      <AddCircle fontSize="large" color="primary" />
                    </IconButton>
                  </ShopOwner>
                </Box>
              </Grid>
              {renderProducts()}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Shop;
