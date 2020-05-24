import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: '#fff'
  },
  title: {
    flexGrow: 1
  },
  button: {
    marginLeft: theme.spacing(2)
  }
}));

export default useStyles;
