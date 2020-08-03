import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from './components/drawer';
import Products from './components/products';
import { StyledTitle } from '../../../elements/common/navbar';

import { GlobalContext } from '../../../context/GlobalState';

const NavBar = () => {
  const { state } = useContext(GlobalContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <StyledTitle variant="h6">Squig's Lair</StyledTitle>
          {state.user && <Products />}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBar;
