import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box
} from '@material-ui/core';

import NavBar from '../../components/common/navbar/NavBar';

import template from '../../assets/template.jpg';

import { makeStyles } from '@material-ui/core/styles';

import { fetchy } from '../../utils/fetchy';

import query from '../../graphql/queries/fetchShop';

import { GlobalContext } from '../../context/GlobalState';
import { setShop } from '../../context/actions/shopActions';
import ShopCard from '../../components/start/card/ShopCard';

const useStyles = makeStyles({
  banner: {
    width: '100%',
    height: '15rem'
  },
  image: {
    objectFit: 'cover',
    height: '15rem',
    width: '100%'
  },
  card: {
    display: 'flex'
  },
  content: {
    flex: 1
  },
  profileImage: {
    height: 142,
    width: 142
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
          <Grid item xs={12} md={7}>
            <Card>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  {shop?.shopTitle}
                </Typography>
                <Typography>{shop?.shopDescription}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Joelmosen
                </Typography>
                <Typography>Ratings</Typography>
              </CardContent>
              <CardMedia className={classes.profileImage} image={template} />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">Products</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShopCard
                  shopTitle="Basic Sketch"
                  shortShopDescription="I will draw a basic sketch in different poses for your character. It won't be super detailed"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShopCard
                  shopTitle="Basic Sketch"
                  shortShopDescription="I will draw a basic sketch in different poses for your character. It won't be super detailed"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShopCard
                  shopTitle="Basic Sketch"
                  shortShopDescription="I will draw a basic sketch in different poses for your character. It won't be super detailed"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ShopCard
                  shopTitle="Basic Sketch"
                  shortShopDescription="I will draw a basic sketch in different poses for your character. It won't be super detailed"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Shop;
