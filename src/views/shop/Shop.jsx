import React, { useContext, useEffect, useState } from 'react';
import View from '../../components/common/viewTemplate';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import AddProductCollapsible from '../../components/views/shop/addProductCollapsible';

import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/fetchShop';

import { GlobalContext } from '../../context/GlobalState';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Shop = () => {
  const { state } = useContext(GlobalContext);
  const { user } = state;
  const { shopId } = user ?? {};
  const [shop, setShop] = useState({});

  useEffect(() => {
    if (!shopId) return;
    const fetchShop = async () => {
      const res = await fetchy(query, { id: shopId });
      setShop(res.data.data.shop);
    };
    fetchShop();
  }, [shopId]);

  const renderProducts = () =>
    shop.products?.map(({ productDescription, productTitle, price, _id }) => (
      <Grid item xs={12} key={_id}>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
              {productTitle}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {productDescription}
            </Typography>
            <Box mt={3}>
              <Typography>{price} SEK</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ));

  return (
    <View>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center">
              {shop.shopTitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom>{shop.shopDescription}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" align="center">
              Products
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AddProductCollapsible
              title="Add product"
              shop={shop}
              setShop={setShop}
            />
          </Grid>
          {renderProducts()}
        </Grid>
      </Box>
    </View>
  );
};

export default Shop;
