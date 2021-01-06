import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  blogContentWrapper: {
    color: '#FFFFFF',
    maxWidth: 1280,
    width: '100%',
  },
  wrapper: {
    minHeight: '60vh',
  },
  img: {
    width: '100%',
    height: '100%',
    margin: theme.spacing(1),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
    color: 'white',
  },
  imgWrapper: {
    display: 'flex',
    alignSelf: 'center',
  },
}));
