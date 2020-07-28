import { SHOW_TOAST, HIDE_TOAST, LOGIN, LOGOUT } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
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
