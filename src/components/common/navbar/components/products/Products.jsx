import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import { StyledTitle } from '../../../../../elements/common/navbar';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <IconButton onClick={openDialog}>
        <ShoppingCartIcon />
      </IconButton>
      <Dialog fullScreen open={isOpen} TransitionComponent={Transition}>
        <AppBar>
          <Toolbar>
            <StyledTitle variant="h6">Products</StyledTitle>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              onClick={closeDialog}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Dialog>
    </>
  );
};

export default Products;
