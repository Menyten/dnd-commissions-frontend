import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField
} from '@material-ui/core';

import { GlobalContext } from '../../../context/GlobalState';
import { setProducts } from '../../../context/actions/shopActions';
import { fetchy } from '../../../utils/fetchy';

const ProductModal = ({ open, toggleDialog }) => {
  const { dispatch } = useContext(GlobalContext);
  const { shopId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const updateTitleField = e => setTitle(e.target.value);
  const updateDescriptionField = e => setDescription(e.target.value);
  const updatePriceField = e => setPrice(e.target.value * 1);

  const emptyAllFields = () => {
    setTitle('');
    setDescription('');
    setPrice('');
  };

  const query = /* GraphQL */ `
    mutation(
      $shopId: String
      $title: String
      $description: String
      $price: Float
    ) {
      createProduct(
        shopId: $shopId
        productTitle: $title
        productDescription: $description
        price: $price
      ) {
        _id
        productTitle
        productDescription
        price
      }
    }
  `;

  const submit = async e => {
    e.preventDefault();
    const res = await fetchy.post('', {
      query,
      variables: {
        title,
        description,
        price,
        shopId
      }
    });
    const data = await res.json();
    dispatch(setProducts(data.data.createProduct));
    toggleDialog();
  };

  return (
    <Dialog open={open} maxWidth="sm" fullWidth onExited={emptyAllFields}>
      <DialogTitle>Add product</DialogTitle>
      <DialogContent>
        <TextField
          required
          label="Title"
          fullWidth
          margin="dense"
          value={title}
          onChange={updateTitleField}
        />
        <TextField
          required
          label="Description"
          fullWidth
          margin="dense"
          value={description}
          onChange={updateDescriptionField}
        />
        <TextField
          required
          type="number"
          label="Price"
          fullWidth
          margin="dense"
          value={price}
          onChange={updatePriceField}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" size="large" onClick={toggleDialog}>
          Cancel
        </Button>
        <Button
          color="primary"
          size="large"
          disabled={!title || !description || !price}
          onClick={submit}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
