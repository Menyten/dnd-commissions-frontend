import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import template from '../../../assets/template.jpg';

const useStyles = makeStyles(theme => ({
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
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

const ProductCard = ({ owner, title, price, _id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0} title={title}>
      <CardActionArea>
        <Link className={classes.link} to={`/${owner}/product/${_id}`}>
          <CardMedia className={classes.media} image={template} />
          <CardContent>
            <Typography className={classes.title} variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="caption" component="p">
              {owner}
            </Typography>
            <Typography variant="h6" component="p">
              {price} SEK
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
