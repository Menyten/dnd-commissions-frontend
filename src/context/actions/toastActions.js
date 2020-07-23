import { SHOW_TOAST, HIDE_TOAST } from '../types';

export const showToast = (type, message) => ({
  type: SHOW_TOAST,
  payload: {
    type,
    message
  }
});

export const hideToast = () => ({
  type: HIDE_TOAST
});
