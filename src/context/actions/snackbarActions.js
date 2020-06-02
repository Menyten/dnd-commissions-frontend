export const showSnackbar = (type, message) => ({
  type: 'SHOW_SNACKBAR',
  payload: {
    type,
    message
  }
});

export const hideSnackbar = () => ({
  type: 'HIDE_SNACKBAR'
});
