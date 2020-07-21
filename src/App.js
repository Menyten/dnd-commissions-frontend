import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from './views/start/Start';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Start} />
      </Switch>
    </>
  );
}

export default App;
