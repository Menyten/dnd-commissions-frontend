import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Paper, Typography } from '@material-ui/core';

import NavBar from '../../components/common/navbar/NavBar';

import template from '../../assets/template.jpg';

import { makeStyles } from '@material-ui/core/styles';

import { fetchy } from '../../utils/fetchy';

import query from '../../graphql/queries/fetchShop';

import { GlobalContext } from '../../context/GlobalState';
import { setShop } from '../../context/actions/shopActions';

const useStyles = makeStyles({
  banner: {
    width: '100%',
    height: '15rem'
  },
  image: {
    objectFit: 'cover',
    height: '15rem',
    width: '100%'
  }
});

const Shop = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const { shop } = state;
  const { shopId } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const fetchShop = async () => {
      const res = await fetchy.post('', {
        query,
        variables: {
          shopId
        }
      });
      const data = await res.json();
      dispatch(setShop(data.data.fetchShop));
    };
    fetchShop();
  }, [dispatch, shopId]);

  return (
    <>
      <NavBar />
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Paper className={classes.banner}>
              {/* eslint-disable-next-line */}
              <img className={classes.image} src={template} alt="Shop image" />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0}>
              <Typography variant="h4" component="h2">
                {shop?.shopTitle}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Shop;
