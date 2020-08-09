import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const ProductCard = ({ id, title, description, price, shop }) => {
  const history = useHistory();

  const goToProductPage = () => {
    history.push(`/product/${id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={goToProductPage}>
        <CardHeader
          title={title}
          titleTypographyProps={{
            variant: 'h6',
            component: 'h2'
          }}
          subheader={shop.shopTitle}
        />
        <CardContent>
          <Typography color="textSecondary">{description}</Typography>
          <Box mt={3}>
            <Typography>{price} SEK</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
