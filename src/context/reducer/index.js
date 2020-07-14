import {
  SET_USER,
  REMOVE_USER,
  SET_TOKEN,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
  SET_SHOP,
  SET_SHOP_PRODUCTS,
  FETCH_PRODUCTS
} from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_SHOP:
      return { ...state, shop: payload };
    case SET_SHOP_PRODUCTS:
      return {
        ...state,
        shop: {
          ...state.shop,
          products: payload
        }
      };
    case SET_USER:
      return { ...state, user: payload };
    case REMOVE_USER:
      return { ...state, user: null };
    case FETCH_PRODUCTS:
      return { ...state, products: payload };
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
