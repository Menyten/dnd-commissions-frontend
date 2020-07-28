import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import fetchy from '../../../../utils/fetchy';
import query from '../../../../graphql/mutations/addProduct';

import { GlobalContext } from '../../../../context/GlobalState';
import { showToast } from '../../../../context/actions/toastActions';

const AddProductCollapsible = ({ title, shop, setShop }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { user } = state;
  const { shopId } = user ?? {};
  const [productTitle, setProductTitle] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');

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
    const res = await fetchy(query, data);
    if (!res.ok) return dispatch(showToast('error', 'Failed to add product'));
    emptyFields();
    setShop({ ...shop, products: res.data.data.addProduct });
    return dispatch(showToast('success', 'Successfully added product'));
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="add-product-content"
        id="add-product-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2} component="form" onSubmit={addProduct}>
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
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add product
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AddProductCollapsible;
