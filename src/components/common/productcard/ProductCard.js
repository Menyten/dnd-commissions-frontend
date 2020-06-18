import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import template from '../../../assets/template.jpg';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'transparent'
  },
  media: {
    height: 140
  },
  title: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});

const ProductCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia className={classes.media} image={template} />
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            Group drawing very detailed
          </Typography>
          <Typography variant="caption" component="p">
            Joelmosen
          </Typography>
          <Typography variant="h6" component="p">
            200 SEK
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
