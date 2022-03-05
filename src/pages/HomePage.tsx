import Box from '@mui/material/Box';

//Components
import BannersComponent from '../components/Banners';
import ProductsComponent from '../components/Products';
import SocialMediaComponent from '../components/SocialMedia';
import ContactComponent from '../components/Contact';

export default function HomePage() {
  return (
    <Box>
      <BannersComponent />
      <ProductsComponent />
      <SocialMediaComponent />
      <ContactComponent />
    </Box>
  );
}
