import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '20rem',
    backgroundColor: 'lightgrey',
    marginBottom: theme.spacing(4)
  },
  image: {
    position: 'absolute',
    height: '20rem',
    width: '100%',
    objectFit: 'cover'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.5
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  title: {
    color: '#fff'
  },
  typography: {
    color: '#fff',
    fontWeight: 400
  },
  footer: {
    alignSelf: 'flex-end'
  }
}));

export default useStyles;
