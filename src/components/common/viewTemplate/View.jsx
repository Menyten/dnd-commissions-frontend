import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from '../navbar';

const View = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default View;
