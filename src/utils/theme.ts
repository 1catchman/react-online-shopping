import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    }
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`
  }
});
