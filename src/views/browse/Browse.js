import React from 'react';
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

const Browse = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box marginTop="1rem">
          <Grid container spacing={3}>
            <Hidden xsDown>
              <Grid item xs={12} sm={3}>
                <Typography>Hello</Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="search">
                      Search shops and products
                    </InputLabel>
                    <OutlinedInput
                      id="search"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton edge="end">
                            <Search />
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={197}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    image={template}
                    title="Sup man"
                    description="Heyoo this is a test bree"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    image={template}
                    title="Sup man"
                    description="Heyoo this is a test bree"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    image={template}
                    title="Sup man"
                    description="Heyoo this is a test bree"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    image={template}
                    title="Sup man"
                    description="Heyoo this is a test bree"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Browse;
