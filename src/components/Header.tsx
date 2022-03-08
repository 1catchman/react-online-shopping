import { useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  useMediaQuery
} from '@mui/material/';
import RouterLink from './RouterLink';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/styles';
import { menuLinks } from './Menu';

import BasicMenu from './Menu';
import logo from '../images/logo.png';

const NavBox = styled(Box)({
  '& button:not(:last-child)': {
    marginRight: 15
  },
  '& a:not(:last-child)': {
    marginRight: 15
  }
});

const CustomButton = styled(Button)({
  fontFamily: `'Poppins', sans-serif`,
  color: '#424242',
  textTransform: 'capitalize',
  letterSpacing: 1,
  fontWeight: '600',
  fontSize: 16,
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
        <Toolbar id="back-to-top-anchor">
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" />
          </Box>
          {matches ? (
            <NavBox>
              {menuLinks.map((link) => {
                return (
                  <RouterLink key={link.name} to={link.to}>
                    <CustomButton variant="text">
                      {link.name}
                    </CustomButton>
                  </RouterLink>
                );
              })}
            </NavBox>
          ) : (
            <BasicMenu appBarRef={appBarElement} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
