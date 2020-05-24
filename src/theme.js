import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#E32C17",
      },
      text: {
        primary: "#fff",
        secondary: "#000",
      },
    },
  })
);
