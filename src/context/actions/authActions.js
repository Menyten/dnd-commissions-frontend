import { SET_USER, SET_TOKEN } from '../types/index';

export const setUser = data => ({
  type: SET_USER,
  payload: data
});

export const setToken = data => ({
  type: SET_TOKEN,
  payload: data
});
