import { SHOW_TOAST, HIDE_TOAST, LOGIN, LOGOUT, ADD_TO_CART } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...payload }] };
    case LOGIN:
      return { ...state, user: payload };
    case LOGOUT:
      return { ...state, user: null };
    case SHOW_TOAST:
      return { ...state, toast: { ...payload, open: true } };
    case HIDE_TOAST:
      return { ...state, toast: { ...state.toast, open: false } };
    default:
      return state;
  }
};
