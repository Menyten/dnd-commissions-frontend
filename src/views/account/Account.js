import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Hidden,
  Box
} from '@material-ui/core';
import {
  AccountCircle,
  Store,
  Settings,
  ShoppingBasket,
  Message,
  ExitToApp
} from '@material-ui/icons';

import NavBar from '../../components/common/navbar/NavBar';
import CreateShop from '../../components/profile/createshop/CreateShop';

import profileStyles from '../../styles/profile/profileStyles';
import { fetchy } from '../../utils/fetchy';

const Account = () => {
  const classes = profileStyles();

  const signOut = async () => {
    const res = await fetchy.post('', {
      query: /* GraphQL */ `
        {
          signOut
        }
      `
    });

    console.log(await res.json());
  };

  return (
    <>
      <NavBar />
      <Container className={classes.root}>
        <Box display="flex" height="100%" alignItems="flex-start">
          <Hidden smDown>
            <Paper className={classes.panelLeft}>
              <List component="nav">
                <ListItem button>
                  <ListItemIcon>
                    <AccountCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <ShoppingBasket color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Orders" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Message color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Messages" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Settings color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button component={Link} to="/account/create-shop">
                  <ListItemIcon>
                    <Store color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Start a shop" />
                </ListItem>
                <ListItem button onClick={signOut}>
                  <ListItemIcon>
                    <ExitToApp color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Log out" />
                </ListItem>
              </List>
            </Paper>
          </Hidden>
          <Paper className={classes.panelRight}>
            <Typography variant="h4" gutterBottom>
              Create a shop
            </Typography>
            <Route path="/account/create-shop">
              <CreateShop />
            </Route>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Account;
