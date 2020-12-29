import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#081C39', //BLUE
    },
    secondary: {
      main: '#32E965', //GREEN
    },
    background: {
      default: '#081C39',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
    pink: {
      main: '#F58A07',
    },
    orange: {
      main: '#F58A07',
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
