import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PoppinsTypography } from '../utils/PoppinsTypography';

import firstServiceImage from '../images/service-01.jpg';
import secondServiceImage from '../images/service-02.jpg';
import thirdServiceImage from '../images/service-03.jpg';

const CustomCard = styled(Card)({
  transition: 'all .3s',
  '&:hover': {
    transform: 'scale(1.03)'
  }
});

export default function ServicesComponent() {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Container
      maxWidth={lgBreakpointUp ? 'lg' : 'md'}
      sx={{ py: 10 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          mb: 8
        }}
      >
        <PoppinsTypography variant="h3" sx={{ fontWeight: 700 }}>
          Our Services
        </PoppinsTypography>
        <PoppinsTypography
          variant="subtitle1"
          color="#a1a1a1"
          fontStyle="italic"
        >
          Details to details is what makes Hexashop different from the
          other themes.
        </PoppinsTypography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Grid item sm={12} md={8} lg={4}>
          <CustomCard sx={{ p: 4 }} square elevation={3}>
            <CardContent sx={{ mb: 1 }}>
              <PoppinsTypography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Synther Vaporware
              </PoppinsTypography>
              <PoppinsTypography
                variant="subtitle2"
                sx={{ lineHeight: '25px' }}
              >
                Lorem ipsum dolor sit amet, consecteturti adipiscing
                elit, sed do eiusmod temp incididunt ut labore, et
                dolore quis ipsum suspend.
              </PoppinsTypography>
            </CardContent>
            <CardMedia
              component="img"
              width="100%"
              image={firstServiceImage}
              alt="Service"
            />
          </CustomCard>
        </Grid>
        <Grid item sm={12} md={8} lg={4}>
          <CustomCard sx={{ p: 4 }} square elevation={3}>
            <CardContent sx={{ mb: 1 }}>
              <PoppinsTypography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Locavore Squidward
              </PoppinsTypography>
              <PoppinsTypography
                variant="subtitle2"
                sx={{ lineHeight: '25px' }}
              >
                Lorem ipsum dolor sit amet, consecteturti adipiscing
                elit, sed do eiusmod temp incididunt ut labore, et
                dolore quis ipsum suspend.
              </PoppinsTypography>
            </CardContent>
            <CardMedia
              component="img"
              width="100%"
              image={secondServiceImage}
              alt="Service"
            />
          </CustomCard>
        </Grid>
        <Grid item sm={12} md={8} lg={4}>
          <CustomCard sx={{ p: 4 }} square elevation={3}>
            <CardContent sx={{ mb: 1 }}>
              <PoppinsTypography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Health Gothfam
              </PoppinsTypography>
              <PoppinsTypography
                variant="subtitle2"
                sx={{ lineHeight: '25px' }}
              >
                Lorem ipsum dolor sit amet, consecteturti adipiscing
                elit, sed do eiusmod temp incididunt ut labore, et
                dolore quis ipsum suspend.
              </PoppinsTypography>
            </CardContent>
            <CardMedia
              component="img"
              width="100%"
              image={thirdServiceImage}
              alt="Service"
            />
          </CustomCard>
        </Grid>
      </Grid>
    </Container>
  );
}
