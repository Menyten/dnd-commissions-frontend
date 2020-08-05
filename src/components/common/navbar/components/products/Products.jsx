import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import { StyledTitle } from '../../../../../elements/common/navbar';
import { Box, Button } from '@material-ui/core';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <>
      <IconButton onClick={toggleDialog}>
        <ShoppingCartIcon />
      </IconButton>
      <Dialog fullScreen open={isOpen} TransitionComponent={Transition}>
        <AppBar style={{ position: 'relative' }}>
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
        </AppBar>
        <Box mt={2}>
          <Card>
            <CardHeader
              title="Single sketch of your character 1920x1080"
              titleTypographyProps={{
                variant: 'subtitle1',
                component: 'h2'
              }}
            ></CardHeader>
            <CardContent>
              <Accordion elevation={0}>
                <AccordionSummary
                  style={{ padding: 0 }}
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography style={{ flexGrow: 1 }} color="textSecondary">
                    Your Description
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    John is a tall and dark skinned elf. One ear is pointy and
                    the other has been bitten of by the tip. Short hair with a
                    constant frown on his face.
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
        </Box>
      </Dialog>
    </>
  );
};

export default Products;
