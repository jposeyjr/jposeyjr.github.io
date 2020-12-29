import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.imgur.com/kGJGzzU.jpg')`,
    height: '300px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
    padding: '5%',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
  },
}));
