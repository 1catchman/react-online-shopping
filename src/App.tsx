import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/styles';
import { theme } from './utils/theme';

//Components
import HeaderComponent from './components/Header';
import BannersComponent from './components/Banners';
import ProductsComponent from './components/Products';
import SocialMediaComponent from './components/SocialMedia';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{ overflow: 'hidden' }}
      >
        <Box>
          <HeaderComponent />
          <BannersComponent />
          <ProductsComponent />
          <SocialMediaComponent />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
