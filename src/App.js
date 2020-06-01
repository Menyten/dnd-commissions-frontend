import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from './views/start/Start';
import SignUp from './views/signup/SignUp';
import SignIn from './views/signin/SignIn';
import Profile from './views/profile/Profile';

import Authenticated from './components/app/authenticated/Authenticated';

function App() {
  return (
    <Switch>
      <Authenticated path="/signin" component={SignIn} />
      <Authenticated path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/" component={Start} />
    </Switch>
  );
}

export default App;
