import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    margin: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(0.5),
    maxWidth: 450,
    height: '100%',
    margin: 'auto',
    color: theme.palette.text.secondary,
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
  },
  techList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  icons: {
    marginRight: '10px',
  },
  boxLinks: {
    marginTop: '10px',
  },
  titleCard: {
    padding: '0px 0px 15px 0px',
  },
  link: {
    '&:focus, &:hover, &:visited, &:link, &:active': {
      color: '#1DA1F2',
    },
  },
}));
