import React from "react";
import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";

import navbarStyles from "../../../styles/start/navbar/navbarStyles";

const NavBar = () => {
  const classes = navbarStyles();

  return (
    <AppBar className={classes.appbar} position="static">
      <Container disableGutters={true}>
        <Toolbar>
          <Typography variant="h6" component="h1" color="textPrimary">
            Dnd-commissions
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
