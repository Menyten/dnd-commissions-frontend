import { SET_SHOP, SET_PRODUCTS } from '../types/index';

export const setShop = data => ({
  type: SET_SHOP,
  payload: data
});

export const setProducts = data => ({
  type: SET_PRODUCTS,
  payload: data
});
