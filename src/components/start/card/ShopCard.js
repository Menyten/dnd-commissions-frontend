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

const ShopCard = ({ image, title, description, price }) => {
  const classes = shopCardStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        {price && (
          <Typography variant="h6" component="p">
            Price: {price} SEK
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button color="primary">{price ? 'buy' : 'see shop'}</Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
