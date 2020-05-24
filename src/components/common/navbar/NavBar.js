import React from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Typography
} from '@material-ui/core';

import navbarStyles from '../../../styles/start/navbar/navbarStyles';

const NavBar = () => {
  const classes = navbarStyles();

  return (
    <AppBar className={classes.appbar} position="static">
      <Container disableGutters={true}>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            component="h1"
            color="textSecondary"
          >
            Dnd-commissions
          </Typography>
          <Button color="primary">Sign in</Button>
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            component="a"
          >
            Sign up
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
