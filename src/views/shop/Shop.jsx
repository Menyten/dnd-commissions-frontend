import React, { useContext, useEffect, useState } from 'react';
import View from '../../components/common/viewTemplate';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/fetchShop';
import mutation from '../../graphql/mutations/addProduct';

import { GlobalContext } from '../../context/GlobalState';
import { showToast } from '../../context/actions/toastActions';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Shop = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { user } = state;
  const { shopId } = user ?? {};
  const [shop, setShop] = useState({});
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (!shopId) return;
    const fetchShop = async () => {
      const res = await fetchy(query, { id: shopId });
      setShop(res.data.data.shop);
    };
    fetchShop();
  }, [shopId]);

  const emptyFields = () => {
    setProductTitle('');
    setProductDescription('');
    setPrice('');
  };

  const addProduct = async e => {
    e.preventDefault();
    const data = {
      shop: shopId,
      productTitle,
      productDescription,
      price
    };
    const res = await fetchy(mutation, data);
    if (!res.ok) return dispatch(showToast('error', 'Failed to add product'));
    emptyFields();
    return dispatch(showToast('success', 'Successfully added product'));
  };

  return (
    <View>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {shop.shopTitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom>{shop.shopDescription}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Products
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Accordion square={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="add-product-content"
                id="add-product-header"
              >
                <Typography>Add product</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  spacing={2}
                  component="form"
                  onSubmit={addProduct}
                >
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Product Title"
                      fullWidth
                      required
                      value={productTitle}
                      onChange={e => setProductTitle(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Product Description"
                      fullWidth
                      required
                      multiline
                      value={productDescription}
                      onChange={e => setProductDescription(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      variant="outlined"
                      label="Product Price"
                      fullWidth
                      required
                      value={price}
                      onChange={e => setPrice(e.target.value * 1)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Add product
                    </Button>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </View>
  );
};

export default Shop;
