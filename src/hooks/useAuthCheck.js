import { useEffect, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { login } from '../context/actions/authActions';
import fetchy from '../utils/fetchy';
import query from '../graphql/queries/me';

const useAuthCheck = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const { user } = state;

  useEffect(() => {
    const check = async () => {
      const res = await fetchy(query);
      if (res.data?.errors) return;
      if (res.data?.data.me.user) {
        return dispatch(login(res.data.data.me.user));
      }
    };
    if (!user) {
      check();
    }
  }, [user, dispatch]);
};

export default useAuthCheck;
