import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { GlobalContext } from '../../../context/GlobalState';

const Authenticated = props => {
  const { state } = useContext(GlobalContext);
  const { user } = state;

  return !user ? <Route {...props} /> : <Redirect to="/" />;
};

export default Authenticated;
