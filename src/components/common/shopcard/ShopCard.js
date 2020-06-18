import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box
} from '@material-ui/core';

import shopCardStyles from '../../../styles/start/shopcard/shopCardStyles';

const ShopCard = ({ image, title, description, price }) => {
  const classes = shopCardStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          marginRight="1rem"
        >
          <Button variant="contained" color="primary">
            {price ? 'buy' : 'see shop'}
          </Button>
          {price && (
            <Typography variant="h6" component="p">
              {price} SEK
            </Typography>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
