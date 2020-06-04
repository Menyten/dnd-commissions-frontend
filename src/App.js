import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from './views/start/Start';
import SignUp from './views/signup/SignUp';
import SignIn from './views/signin/SignIn';
import Account from './views/account/Account';

import Authenticated from './components/app/authenticated/Authenticated';
import Toast from './components/common/toast/Toast';

import useAuthCheck from './hooks/useAuthCheck';

function App() {
  useAuthCheck();

  return (
    <>
      <Switch>
        <Authenticated path="/signin" component={SignIn} />
        <Authenticated path="/signup" component={SignUp} />
        <Route path="/account" component={Account} />
        <Route path="/" component={Start} />
      </Switch>
      <Toast />
    </>
  );
}

export default App;
