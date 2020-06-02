import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import { GlobalProvider } from './context/GlobalState';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
