import { ThemeProvider } from '@mui/styles';
import { theme } from './utils/theme';
import { CssBaseline, Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth={false}
        sx={{ overflowX: 'hidden' }}
      >
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <FooterComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App;
