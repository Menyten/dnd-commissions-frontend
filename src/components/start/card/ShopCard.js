import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography
} from '@material-ui/core';

import shopCardStyles from '../../../styles/start/shopcard/shopCardStyles';

const ShopCard = ({ image, shopTitle, shortShopDescription }) => {
  const classes = shopCardStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {shopTitle}
        </Typography>
        <Typography variant="body2">{shortShopDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">see shop</Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
