import React, { useContext } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { GlobalContext } from '../../../../../../../context/GlobalState';
import { removeFromCart } from '../../../../../../../context/actions/cartActions';

import {
  StyledAccordionSummary,
  StyledTitle,
  StyledCartItemCard
} from '../../../../../../../elements/common/navbar/components/shoppingCart';

const CartItem = ({
  cartItemId: id,
  productId,
  productTitle,
  orderDescription,
  price
}) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { cart } = state;

  const removeProduct = () => {
    const filteredCart = cart.filter(({ cartItemId }) => cartItemId !== id);
    dispatch(removeFromCart(filteredCart));
  };

  return (
    <StyledCartItemCard elevation={3}>
      <CardHeader
        title={productTitle}
        titleTypographyProps={{
          variant: 'subtitle1',
          component: 'h2'
        }}
      />
      <CardContent>
        <Accordion elevation={0}>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <StyledTitle color="textSecondary">Your Description</StyledTitle>
          </StyledAccordionSummary>
          <AccordionDetails>
            <Typography>{orderDescription}</Typography>
          </AccordionDetails>
        </Accordion>
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="textSecondary">{price} SEK</Typography>

          <Button variant="outlined" color="secondary" onClick={removeProduct}>
            Remove
          </Button>
        </Box>
      </CardContent>
    </StyledCartItemCard>
  );
};

export default CartItem;
