import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

//Components
import HeaderComponent from './components/Header';
import BannersComponent from './components/Banners';

function App() {
  return (
    <>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Box>
          <HeaderComponent />
          <BannersComponent />
        </Box>
      </Container>
    </>
  );
}

export default App;
