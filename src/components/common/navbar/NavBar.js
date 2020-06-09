import React, { useContext } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Link as MuiLink
} from '@material-ui/core';
import { AccountCircle, Store } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import navbarStyles from '../../../styles/start/navbar/navbarStyles';

import { GlobalContext } from '../../../context/GlobalState';

const NavBar = () => {
  const { state } = useContext(GlobalContext);
  const { user } = state;
  const classes = navbarStyles();

  const renderSignedInNavigation = () => (
    <>
      {renderShopkeeperNavigation()}
      <MuiLink component={Link} to="/account">
        <IconButton color="primary">
          <AccountCircle fontSize="large" />
        </IconButton>
      </MuiLink>
      )
    </>
  );

  const renderShopkeeperNavigation = () =>
    user.role === 'shopkeeper' && (
      <MuiLink component={Link} to="/account">
        <IconButton color="primary">
          <Store fontSize="large" />
        </IconButton>
      </MuiLink>
    );

  const renderSignedOutNavigation = () => (
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
    <AppBar className={classes.appbar} position="static">
      <Container disableGutters={true}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="textSecondary"
            component={Link}
            to="/"
          >
            Squig's lair
          </Typography>
          {user && renderSignedInNavigation()}
          {!user && renderSignedOutNavigation()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
