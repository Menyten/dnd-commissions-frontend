import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#ccc",
      },
      text: {
        primary: "#fff",
      },
    },
  })
);
