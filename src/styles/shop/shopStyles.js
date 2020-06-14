import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  banner: {
    width: '100%',
    height: '15rem'
  },
  image: {
    objectFit: 'cover',
    height: '15rem',
    width: '100%'
  },
  card: {
    display: 'flex'
  },
  content: {
    flex: 1
  },
  profileImage: {
    height: 142,
    width: 142
  }
});

export default useStyles;
