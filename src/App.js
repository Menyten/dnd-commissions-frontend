import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from './views/start';
import CreateAccount from './views/createAccount';

function App() {
  return (
    <>
      <Switch>
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/" component={Start} />
      </Switch>
    </>
  );
}

export default App;
