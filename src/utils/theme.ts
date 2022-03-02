import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    }
  }
});
