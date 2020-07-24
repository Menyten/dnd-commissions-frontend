import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Authenticated from './components/common/authenticated';
import Toast from './components/common/toast';
import Start from './views/start';
import Login from './views/login';
import Shop from './views/shop';
import CreateAccount from './views/createAccount';
import CreateShop from './views/createShop';

function App() {
  return (
    <>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/create-shop" component={CreateShop} />
        <Authenticated path="/create-account" component={CreateAccount} />
        <Authenticated path="/login" component={Login} />
        <Route path="/" component={Start} />
      </Switch>
      <Toast />
    </>
  );
}

export default App;
