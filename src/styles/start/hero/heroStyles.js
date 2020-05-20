import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    height: "20rem",
    backgroundColor: "lightgrey",
  },
  image: {
    position: "absolute",
    height: "20rem",
    width: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.5,
  },
  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  typography: {
    fontWeight: 400,
  },
  footer: {
    alignSelf: "flex-end",
    "& > :first-child": {
      marginRight: "1rem",
    },
  },
}));

export default useStyles;
