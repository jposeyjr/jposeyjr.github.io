import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.text.primary,
    },
    '& .MuiFormHelperText-root': {
      color: theme.palette.text.primary,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFFFFF',
      },
    },
  },
  paper: {
    maxWidth: 600,
    backgroundColor: theme.palette.background.default,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
    width: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  buttons: {
    margin: theme.spacing(1),
    color: theme.palette.text.primary,
  },
}));
