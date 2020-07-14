import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  user: null,
  shop: null,
  products: null,
  token: null,
  snackbar: {
    open: false,
    type: 'success',
    message: ''
  }
};

const GlobalContext = createContext(initialState);

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
export { GlobalContext, GlobalProvider };
