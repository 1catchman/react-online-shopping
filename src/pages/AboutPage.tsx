import { Box } from '@mui/material';

import AboutComponent from '../components/About';
import TeamComponent from '../components/Team';
import ServicesComponent from '../components/Services';
import SubscribeComponent from '../components/Subscribe';

export default function AboutPage() {
  return (
    <Box>
      <AboutComponent />
      <TeamComponent />
      <ServicesComponent />
      <SubscribeComponent />
    </Box>
  );
}
