import React from "react";
import { Container } from "@material-ui/core";

import NavBar from "../../components/common/navbar/NavBar";
import Hero from "../../components/start/hero/Hero";

const Start = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Hero />
      </Container>
    </>
  );
};

export default Start;
