import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';

import { StyledTitle } from '../../../../../elements/common/navbar';
import { StyledAppBar } from '../../../../../elements/common/navbar/components/shoppingCart';
import CartItem from './components/cartItem';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <>
      <IconButton onClick={toggleDialog}>
        <ShoppingCartIcon />
      </IconButton>
      <Dialog fullScreen open={isOpen} TransitionComponent={Transition}>
        <StyledAppBar>
          <Toolbar>
            <StyledTitle variant="h6">Products</StyledTitle>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              onClick={toggleDialog}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </StyledAppBar>
        <Box mt={2}>
          <CartItem />
        </Box>
      </Dialog>
    </>
  );
};

export default ShoppingCart;
