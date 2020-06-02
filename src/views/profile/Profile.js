import React from 'react';
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
  Message
} from '@material-ui/icons';

import NavBar from '../../components/common/navbar/NavBar';

import profileStyles from '../../styles/profile/profileStyles';

const Profile = () => {
  const classes = profileStyles();

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
                <ListItem button>
                  <ListItemIcon>
                    <Store color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Start a shop" />
                </ListItem>
              </List>
            </Paper>
          </Hidden>
          <Paper className={classes.panelRight}>
            <Typography>Hello</Typography>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Profile;
