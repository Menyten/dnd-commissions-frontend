import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { GlobalContext } from '../../../context/GlobalState';
import { hideToast } from '../../../context/actions/toastActions';

const Toast = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const {
    toast: { open, type, message }
  } = state;

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    dispatch(hideToast());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert elevation={6} variant="filled" severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
