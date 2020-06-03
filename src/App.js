import React, { useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from './views/start/Start';
import SignUp from './views/signup/SignUp';
import SignIn from './views/signin/SignIn';
import Profile from './views/profile/Profile';

import Authenticated from './components/app/authenticated/Authenticated';
import Toast from './components/common/toast/Toast';

import { GlobalContext } from './context/GlobalState';
import { setUser, setToken } from './context/actions/authActions';
import { fetchy } from './utils/fetchy';

function App() {
  const {
    dispatch,
    state: { user, token }
  } = useContext(GlobalContext);

  const query = /* GraphQL */ `
    query {
      checkSignedIn {
        token
        user {
          _id
          username
          firstname
          lastname
          email
        }
      }
    }
  `;

  useEffect(() => {
    const check = async () => {
      const res = await fetchy.post('', {
        query
      });
      const data = await res.json();
      dispatch(setUser(data.data.checkSignedIn.user));
      dispatch(setToken(data.data.checkSignedIn.token));
    };
    if (!user) {
      check();
    }
  }, [user]);

  return (
    <>
      <Switch>
        <Authenticated path="/signin" component={SignIn} />
        <Authenticated path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Start} />
      </Switch>
      <Toast />
    </>
  );
}

export default App;
