import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  blogContentWrapper: {
    color: 'white',
    maxWidth: 1280,
    width: '100%',
  },
  wrapper: {
    minHeight: '60vh',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
    boxShadow: theme.shadows[4],
    color: 'white',
  },
  imgWrapper: {
    display: 'flex',
    alignSelf: 'center',
  },
}));
