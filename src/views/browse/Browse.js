import React, { useEffect, useState, useContext, useRef } from 'react';
import NavBar from '../../components/common/navbar/NavBar';
import {
  Container,
  Grid,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
  InputAdornment,
  Box,
  Hidden,
  Typography
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

import ProductCard from '../../components/common/productcard/ProductCard';
import template from '../../assets/template.jpg';
import { fetchy } from '../../utils/fetchy';
import { fetchProducts } from '../../context/actions/userActions';
import { GlobalContext } from '../../context/GlobalState';
import query from '../../graphql/queries/fetchProducts';

const Browse = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { products } = state;
  const [searchString, setSearchString] = useState('');
  const [labelWidth, setLabelWidth] = useState(0);
  const inputLabel = useRef();

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchy.post('', {
        query
      });
      const data = await res.json();
      dispatch(fetchProducts(data.data.fetchProducts));
    };
    getProducts();
  }, [dispatch]);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const Products = () =>
    products?.map(({ _id, shopId, productTitle, price }) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={_id}>
        <ProductCard
          image={template}
          title={productTitle}
          price={price}
          owner={shopId}
          _id={_id}
        />
      </Grid>
    )) ?? null;

  const getProducts = async () => {
    const res = await fetchy.post('', {
      query,
      variables: {
        searchString
      }
    });
    const data = await res.json();
    dispatch(fetchProducts(data.data.fetchProducts));
  };

  return (
    <>
      <NavBar />
      <Container>
        <Box pt={3}>
          <Grid container spacing={3}>
            <Hidden xsDown>
              <Grid item xs={12} sm={3}>
                <Typography>
                  Some kind of filter etc, should be here I think
                </Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="search" ref={inputLabel}>
                      Search shops and products
                    </InputLabel>
                    <OutlinedInput
                      id="search"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={getProducts}>
                            <Search />
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={labelWidth}
                      value={searchString}
                      onChange={e => setSearchString(e.target.value)}
                      onKeyDown={e => e.keyCode === 13 && getProducts()}
                    />
                  </FormControl>
                </Grid>
                <Products />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Browse;
