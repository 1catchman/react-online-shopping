import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../images/logo.png';
import { styled } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800]
    }
  }
});

const NavBox = styled(Box)({
  '& button:not(:last-child)': {
    marginRight: 15
  }
});

const CustomButton = styled(Button)({
  fontFamily: `'Poppins', sans-serif`,
  color: '#424242',
  textTransform: 'capitalize',
  letterSpacing: 1,
  fontWeight: '600',
  fontSize: 15
});

export default function HeaderComponent() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: 'none',
          my: 4
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <img src={logo} alt="Logo" />
            </Box>
            <NavBox>
              <CustomButton variant="text">Home</CustomButton>
              <CustomButton variant="text">Men's</CustomButton>
              <CustomButton variant="text">Women's</CustomButton>
              <CustomButton variant="text">Kid's</CustomButton>
            </NavBox>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
