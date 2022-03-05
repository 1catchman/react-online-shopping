import { Box } from '@mui/material';

import AboutComponent from '../components/About';
import TeamComponent from '../components/Team';
import ServicesComponent from '../components/Services';
import ContactComponent from '../components/Contact';

export default function AboutPage() {
  return (
    <Box>
      <AboutComponent />
      <TeamComponent />
      <ServicesComponent />
      <ContactComponent />
    </Box>
  );
}
