import React, { useState, useContext } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';

import { StyledTitle } from '../../../../../elements/common/navbar';
import {
  StyledAppBar,
  StyledDialog,
  StyledDialogActions,
  StyledPaymentIcon
} from '../../../../../elements/common/navbar/components/shoppingCart';
import CartItem from './components/cartItem';

import { GlobalContext } from '../../../../../context/GlobalState';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const ShoppingCart = () => {
  const { state } = useContext(GlobalContext);
  const { cart } = state;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  // TODO: Should'nt use index as key
  const CartItems = () =>
    cart.map(data => <CartItem key={data.cartItemId} {...data} />);

  return (
    <>
      <IconButton onClick={toggleDialog}>
        <ShoppingCartIcon />
      </IconButton>
      <StyledDialog fullScreen open={isOpen} TransitionComponent={Transition}>
        <Box flex="1">
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
            {cart.length ? (
              <CartItems />
            ) : (
              <Typography align="center">Your cart is empty!</Typography>
            )}
          </Box>
        </Box>
        {!!cart.length && (
          <StyledDialogActions>
            <Fab variant="extended" color="primary">
              <StyledPaymentIcon />
              Checkout
            </Fab>
          </StyledDialogActions>
        )}
      </StyledDialog>
    </>
  );
};

export default ShoppingCart;
