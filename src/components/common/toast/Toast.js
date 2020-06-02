import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { GlobalContext } from '../../../context/GlobalState';
import { hideSnackbar } from '../../../context/actions/snackbarActions';

const Toast = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const {
    snackbar: { open, type, message }
  } = state;

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert elevation={6} variant="filled" severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
