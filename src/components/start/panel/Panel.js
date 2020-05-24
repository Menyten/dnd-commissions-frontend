import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import panelStyles from '../../../styles/start/panel/panelStyles';

const Panel = ({ children, title }) => {
  const classes = panelStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" color="textSecondary">
          {title}
        </Typography>
      </Grid>
      <Grid className={classes.item} item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Panel;
