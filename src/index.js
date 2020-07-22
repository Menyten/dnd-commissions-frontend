import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';
// import { MuiThemeProvider } from '@material-ui/core';
// import theme from './theme';
import { GlobalProvider } from './context/GlobalState';

ReactDOM.render(
  // <MuiThemeProvider theme={theme}>
  <StylesProvider injectFirst>
    <GlobalProvider>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </StylesProvider>,
  /* </MuiThemeProvider> */ document.getElementById('root')
);
