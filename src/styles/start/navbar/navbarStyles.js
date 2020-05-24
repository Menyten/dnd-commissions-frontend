import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#000",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
}));

export default useStyles;
