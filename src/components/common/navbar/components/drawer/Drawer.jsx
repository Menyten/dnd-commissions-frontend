import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MUIDrawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LoginIcon from '../../../../icons/login';
import StoreIcon from '@material-ui/icons/Store';
import { Link } from 'react-router-dom';
import { StyledList } from '../../../../../elements/common/navbar/components/drawer';

import { GlobalContext } from '../../../../../context/GlobalState';
import fetchy from '../../../../../utils/fetchy';
import mutation from '../../../../../graphql/mutations/logout';
import { logout } from '../../../../../context/actions/authActions';

const Drawer = ({ isDrawerOpen, toggleDrawer }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { user } = state;
  const history = useHistory();

  const handleLogout = async () => {
    const res = await fetchy(mutation);
    if (!res.ok) return console.log(res);
    dispatch(logout());
    history.push('/');
  };

  const renderShopOwnerRoutes = () => {
    return (
      <>
        <ListItem button component={Link} to="/shop">
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </ListItem>
        <ListItem button component="a" onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </>
    );
  };

  const renderLoggedInRoutes = () => {
    return (
      <>
        <ListItem button component={Link} to="/create-shop">
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Create Shop" />
        </ListItem>
        <ListItem button component="a" onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </>
    );
  };

  const renderDefaultRoutes = () => {
    return (
      <>
        <ListItem button component={Link} to="/login">
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/create-account">
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Create Account" />
        </ListItem>
      </>
    );
  };

  return (
    <MUIDrawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <StyledList>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {!user && renderDefaultRoutes()}
        {user && !user.shopId && renderLoggedInRoutes()}
        {user?.shopId && renderShopOwnerRoutes()}
      </StyledList>
    </MUIDrawer>
  );
};

export default Drawer;
