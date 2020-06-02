import {
  SET_USER,
  REMOVE_USER,
  SET_TOKEN,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    case REMOVE_USER:
      return { ...state, user: null };
    case SET_TOKEN:
      return { ...state, token: payload };
    case SHOW_SNACKBAR:
      return { ...state, snackbar: { ...payload, open: true } };
    case HIDE_SNACKBAR:
      return { ...state, snackbar: { ...state.snackbar, open: false } };
    default:
      return state;
  }
};
