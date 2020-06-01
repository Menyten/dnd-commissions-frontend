import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    height: '80vh'
  },
  container: {
    minHeight: '80vh'
  },
  panelRight: {
    flex: 1,
    height: '100%'
  },
  panelLeft: {
    width: '15rem',
    marginRight: theme.spacing(3)
  }
}));

export default useStyles;
