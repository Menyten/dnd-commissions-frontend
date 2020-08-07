import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  StyledAccordionSummary,
  StyledTitle
} from '../../../../../../../elements/common/navbar/components/shoppingCart';

const CartItem = () => {
  return (
    <Card>
      <CardHeader
        title="Single sketch of your character 1920x1080"
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
            <Typography>
              John is a tall and dark skinned elf. One ear is pointy and the
              other has been bitten of by the tip. Short hair with a constant
              frown on his face.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="textSecondary">100 SEK</Typography>

          <Button variant="outlined" color="secondary">
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;
