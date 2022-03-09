import { ThemeProvider } from '@mui/styles';
import { theme } from './utils/theme';
import { CssBaseline, Container, Fab } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import ContactPage from './pages/ContactPage';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{ overflowX: 'hidden', pt: 16 }}
        id="back-to-top-anchor"
      >
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product" element={<SingleProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterComponent />
      </Container>
      <ScrollToTop>
        <Fab
          color="primary"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: '#2a2a2a',
            border: '1px solid #fff',
            opacity: 0.8,
            borderRadius: '3%',
            transition: 'all 0.3s',
            '&:hover': { backgroundColor: '#424242', opacity: 1 }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </ThemeProvider>
  );
}

export default App;
