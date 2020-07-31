import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Products = () => {
  return (
    <>
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
      <Dialog fullScreen open={false}>
        <AppBar style={{ position: 'relative' }}>
          <Toolbar>
            <Typography variant="h6">Products</Typography>
          </Toolbar>
        </AppBar>
      </Dialog>
    </>
  );
};

export default Products;
