import React from "react";
import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";

import navbarStyles from "../../../styles/start/navbar/navbarStyles";

const NavBar = () => {
  const classes = navbarStyles();

  return (
    <Container>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" color="primary">
            Dnd-commissions
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
