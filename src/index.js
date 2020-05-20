import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById("root")
);
