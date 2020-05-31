import React from 'react';
import { Paper } from '@material-ui/core';

import formStyles from '../../../styles/common/form/formStyles';

const Form = ({ children, onSubmit }) => {
  const classes = formStyles();
  return (
    <Paper
      className={classes.root}
      component="form"
      noValidate
      onSubmit={onSubmit}
    >
      {children}
    </Paper>
  );
};

export default Form;
