import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: '#081C39',
    alignItems: 'center',
    display: 'flex',
  },
  margin: {
    margin: theme.spacing(2),
  },
  hero: {
    alignItems: 'center',
  },

  about: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
}));
