import React, { useContext } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Link as MuiLink,
  Box
} from '@material-ui/core';
import { AccountCircle, Store } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import navbarStyles from '../../../styles/start/navbar/navbarStyles';

import { GlobalContext } from '../../../context/GlobalState';

const NavBar = () => {
  const { state } = useContext(GlobalContext);
  const { user } = state;
  const classes = navbarStyles();

  const SignedInNavigation = () => (
    <>
      <ShopkeeperNavigation />
      <MuiLink component={Link} to="/account">
        <IconButton color="primary">
          <AccountCircle fontSize="large" />
        </IconButton>
      </MuiLink>
    </>
  );

  const ShopkeeperNavigation = () =>
    user.role === 'shopkeeper' && (
      <MuiLink component={Link} to={`/shop/${user.shopId}`}>
        <IconButton color="primary">
          <Store fontSize="large" />
        </IconButton>
      </MuiLink>
    );

  const SignedOutNavigation = () => (
    <>
      <Button color="primary" component={Link} to="/signin">
        Sign in
      </Button>
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        component={Link}
        to="/signup"
      >
        Sign up
      </Button>
    </>
  );

  return (
    <AppBar className={classes.appbar} position="sticky">
      <Container disableGutters={true}>
        <Toolbar>
          <Box flexGrow="1">
            <Typography
              className={classes.title}
              variant="h6"
              color="textSecondary"
              component={Link}
              to="/"
            >
              Squig's lair
            </Typography>
          </Box>
          <Button
            className={classes.button}
            color="primary"
            component={Link}
            to="/browse"
          >
            Browse
          </Button>
          {user && <SignedInNavigation />}
          {!user && <SignedOutNavigation />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
