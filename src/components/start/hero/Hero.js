import React from "react";
import { Paper, Typography, Button, Box } from "@material-ui/core";

import heroStyles from "../../../styles/start/hero/heroStyles";
import hero from "../../../assets/hero.jpg";

const Hero = () => {
  const classes = heroStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <img
        className={classes.image}
        src={hero}
        alt="Dragon on top of a building"
      />
      <div className={classes.overlay} />
      <section className={classes.content}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          height="100%"
          padding="0 3rem"
        >
          <section>
            <header>
              <Typography
                variant="h4"
                component="h2"
                color="textPrimary"
                gutterBottom={true}
              >
                Sell your art!
              </Typography>
            </header>
            <Typography
              className={classes.typography}
              variant="h6"
              component="p"
            >
              Dnd-commissions was created for artists to easily sell their art.
            </Typography>
            <Typography
              className={classes.typography}
              variant="h6"
              component="p"
            >
              And for buyers to find good respectable sellers of their choice.
            </Typography>
          </section>
          <footer className={classes.footer}>
            <Button variant="contained" color="primary" size="large">
              Sign up
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Browse
            </Button>
          </footer>
        </Box>
      </section>
    </Paper>
  );
};

export default Hero;
