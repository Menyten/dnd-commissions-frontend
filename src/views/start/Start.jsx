import React, { useState, useEffect } from 'react';
import View from '../../components/common/viewTemplate';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/products';

const Start = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetchy(query);
      setProducts(res.data.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <View>
      <Typography>Start Page</Typography>
      <Card>
        <CardHeader
          title="Single sketch of your character 1920x1080"
          titleTypographyProps={{
            variant: 'h6',
            component: 'h2'
          }}
        />
        <CardContent>
          <Typography color="textSecondary">
            An awesome title that inspires you to commission an image
          </Typography>
          <Box mt={3}>
            <Typography>100 SEK</Typography>
          </Box>
        </CardContent>
      </Card>
    </View>
  );
};

export default Start;
