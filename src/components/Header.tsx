import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../images/logo.png';
import { styled } from '@mui/styles';
import BasicMenu from './Menu';
import { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
  fontSize: 15,
  '&:hover': {
    backgroundColor: '#fafafa',
    color: '#616161'
  }
});

export default function HeaderComponent() {
  const appBarElement = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar
      ref={appBarElement}
      position="static"
      color="transparent"
      sx={{
        boxShadow: 'none',
        py: 4,
        backgroundColor: '#f7f7f7',
        transition: 'all .5s ease 0s'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" />
          </Box>
          {matches ? (
            <NavBox>
              <CustomButton variant="text">Home</CustomButton>
              <CustomButton variant="text">Men's</CustomButton>
              <CustomButton variant="text">Women's</CustomButton>
              <CustomButton variant="text">Kid's</CustomButton>
            </NavBox>
          ) : (
            <BasicMenu appBarRef={appBarElement} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
