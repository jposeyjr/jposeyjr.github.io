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
    padding: theme.spacing(2),
    maxWidth: 600,
    backgroundColor: theme.palette.background.default,
    margin: theme.spacing(4),
    width: 600,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.default,
  },
  buttons: {
    maxWidth: 400,
    margin: theme.spacing(1),
    display: 'flex',
    color: theme.palette.text.primary,
    justifyContent: 'space-between',
  },
}));
