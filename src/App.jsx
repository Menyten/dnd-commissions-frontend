import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Toast from './components/common/toast';
import Start from './views/start';
import Login from './views/login';
import CreateAccount from './views/createAccount';

function App() {
  return (
    <>
      <Switch>
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Start} />
      </Switch>
      <Toast />
    </>
  );
}

export default App;
