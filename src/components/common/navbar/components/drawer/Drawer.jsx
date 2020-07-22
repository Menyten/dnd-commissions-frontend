import React from 'react';
import MUIDrawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LoginIcon from '../../../../icons/login';
import { StyledList } from '../../../../../elements/common/navbar/components/drawer';

const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <MUIDrawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <StyledList>
        <ListItem button>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Create Account" />
        </ListItem>
      </StyledList>
    </MUIDrawer>
  );
};

export default Drawer;
