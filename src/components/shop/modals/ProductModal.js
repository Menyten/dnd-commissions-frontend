import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField
} from '@material-ui/core';

const productModal = ({ open, toggleDialog }) => {
  return (
    <Dialog open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Add product</DialogTitle>
      <DialogContent>
        <TextField label="Title" fullWidth margin="dense" />
        <TextField label="Tescription" fullWidth margin="dense" />
        <TextField type="number" label="Price" fullWidth margin="dense" />
      </DialogContent>
      <DialogActions>
        <Button color="primary" size="large" onClick={toggleDialog}>
          Cancel
        </Button>
        <Button color="primary" size="large">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default productModal;
