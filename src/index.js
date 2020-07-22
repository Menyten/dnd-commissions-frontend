import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { GlobalProvider } from './context/GlobalState';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(
  <StylesProvider injectFirst>
    <GlobalProvider>
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </GlobalProvider>
  </StylesProvider>,
  document.getElementById('root')
);
