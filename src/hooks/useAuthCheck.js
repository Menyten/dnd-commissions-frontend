import { useEffect, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { setUser, setToken } from '../context/actions/authActions';
import { fetchy } from '../utils/fetchy';
import query from '../graphql/queries/checkSignedIn';

const useAuthCheck = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const { user } = state;

  useEffect(() => {
    const check = async () => {
      const res = await fetchy.post('', {
        query
      });
      const data = await res.json();
      if (data.data.checkSignedIn) {
        dispatch(setUser(data.data.checkSignedIn.user));
        dispatch(setToken(data.data.checkSignedIn.token));
      }
      return;
    };
    if (!user) {
      check();
    }
  }, [user, dispatch]);
};

export default useAuthCheck;
