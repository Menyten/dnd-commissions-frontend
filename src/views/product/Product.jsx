import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import View from '../../components/common/viewTemplate';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import AddToCart from '../../components/views/product/addToCart';
import { GlobalContext } from '../../context/GlobalState';
import { addToCart } from '../../context/actions/cartActions';
import { isEmpty } from '../../utils';
import fetchy from '../../utils/fetchy';
import query from '../../graphql/queries/product';

const Product = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [orderDescription, setOrderDescription] = useState('');
  const { productTitle, productDescription, price, shop } = product;
  const { shopTitle, shopDescription } = shop ?? {};

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetchy(query, { id });
      setProduct(res.data.data.product);
    };
    fetchProduct();
  }, [id]);

  const addProductToCart = e => {
    e.preventDefault();
    dispatch(
      addToCart({
        productTitle,
        orderDescription,
        price,
        productId: id
      })
    );
  };

  return (
    <View>
      {isEmpty(product) && (
        <>
          <Box mt={3}>
            <Typography variant="h5" component="h2" gutterBottom>
              {shopTitle}
            </Typography>
            <Typography color="textSecondary">{shopDescription}</Typography>
            <Box my={1}>
              <Divider />
            </Box>
            <Typography variant="h5" component="h2" gutterBottom>
              {productTitle}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {productDescription}
            </Typography>
            <Typography color="textSecondary">{price} SEK</Typography>
          </Box>
          <Box my={1}>
            <Divider />
          </Box>
          {state.user && (
            <AddToCart
              orderDescription={orderDescription}
              setOrderDescription={setOrderDescription}
              addProductToCart={addProductToCart}
            />
          )}
        </>
      )}
    </View>
  );
};

export default Product;
