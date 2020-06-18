import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import panelStyles from '../../../styles/start/panel/panelStyles';

const Panel = ({ children, title }) => {
  const classes = panelStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      {children.map((child, i) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

export default Panel;
