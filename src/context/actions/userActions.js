import { FETCH_PRODUCTS } from '../types/index';

export const fetchProducts = data => ({
  type: FETCH_PRODUCTS,
  payload: data
});
