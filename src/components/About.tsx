import {
  Box,
  Container,
  Grid,
  Stack,
  Link,
  LinkProps
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  PoppinsTypography,
  Img,
  HeadingBox
} from './CustomComponents';

import aboutPageHeadingImage from '../images/about-us-page-heading.jpg';
import aboutPageSectionImage from '../images/about-left-image.jpg';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const CustomLink = styled(({ ...other }: LinkProps) => (
  <Link {...other} underline="none" />
))({
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: 400,
  color: 'white',
  transition: 'all .3s',
  backgroundColor: '#2a2a2a',
  width: '44px',
  height: '44px',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: '56px',
  borderRadius: '50%',
  '&:hover': {
    color: '#2a2a2a',
    backgroundColor: '#eee'
  }
});

export default function AboutComponent() {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box>
      <HeadingBox
        img={aboutPageHeadingImage}
        sx={{
          my: 10
        }}
      >
        <PoppinsTypography
          gutterBottom
          variant="h2"
          sx={{ fontWeight: 700 }}
        >
          About Our Company
        </PoppinsTypography>
        <PoppinsTypography variant="subtitle1">
          Custom, responsive &amp; adaptive Material-UI Template
        </PoppinsTypography>
      </HeadingBox>
      <Container
        maxWidth={lgBreakpointUp ? 'lg' : 'md'}
        sx={{
          py: 10
        }}
      >
        <Grid container spacing={6}>
          <Grid item sm={12} md={12} lg={6}>
            <Img src={aboutPageSectionImage} alt="About Us" />
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
            sx={{ px: 3, textAlign: 'justify' }}
          >
            <PoppinsTypography
              variant="h3"
              sx={{ fontWeight: 700, textAlign: 'start' }}
            >
              About Us &amp; Our Skills
            </PoppinsTypography>
            <PoppinsTypography
              variant="subtitle1"
              color="#a1a1a1"
              mt={3}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiuski smod kon tempor incididunt ut labore.
            </PoppinsTypography>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              mt={3}
            >
              <FormatQuoteIcon />
              <PoppinsTypography
                fontStyle="italic"
                variant="subtitle1"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiuski smod kon tempor incididunt ut
                labore.
              </PoppinsTypography>
            </Stack>
            <PoppinsTypography
              variant="subtitle1"
              color="#a1a1a1"
              my={3}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod kon tempor incididunt ut labore et dolore
              magna aliqua ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </PoppinsTypography>
            <CustomLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              sx={{ mr: 2 }}
            >
              <FacebookIcon />
            </CustomLink>
            <CustomLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              sx={{ mr: 2 }}
            >
              <TwitterIcon />
            </CustomLink>
            <CustomLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              sx={{ mr: 2 }}
            >
              <LinkedInIcon />
            </CustomLink>
            <CustomLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </CustomLink>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
