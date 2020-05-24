import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default useStyles;
