import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    height: 180
  },
  content: {
    flex: 1
  }
}));

export default useStyles;
