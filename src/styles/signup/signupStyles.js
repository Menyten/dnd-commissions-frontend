import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '26rem',
    margin: '0 auto',
    marginTop: theme.spacing(10),
    padding: theme.spacing(3)
  },
  button: {
    marginTop: theme.spacing(2)
  }
}));

export default useStyles;
