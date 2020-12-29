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
    divider: '#FFFFFF',
  },
});
theme = responsiveFontSizes(theme);
export default theme;
