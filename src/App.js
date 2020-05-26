import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from './views/start/Start';
import SignUp from './views/signup/SignUp';

function App() {
  return (
    <Switch>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/">
        <Start />
      </Route>
    </Switch>
  );
}

export default App;
