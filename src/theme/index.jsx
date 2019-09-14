import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

export default createMuiTheme({
  palette: {
    primary: {
      main: cyan[600]
    }
  },
  typography: {
    useNextVariants: true,
  },
});