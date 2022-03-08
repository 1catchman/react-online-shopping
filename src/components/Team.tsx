import { Box, Container, Grid, Link, LinkProps } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PoppinsTypography } from './CustomComponents';

import firstTeamMemberImage from '../images/team-member-01.jpg';
import secondTeamMemberImage from '../images/team-member-02.jpg';
import thirdTeamMemberImage from '../images/team-member-03.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const users = [
  {
    name: 'Hailey	Smith',
    position: 'Marketing Coordinator',
    img: firstTeamMemberImage
  },
  {
    name: 'Ragnar Lodbrok',
    position: 'Product Caretaker',
    img: secondTeamMemberImage
  },
  {
    name: 'Jamison Towne',
    position: 'Web Designer',
    img: thirdTeamMemberImage
  }
];

const CustomLink = styled(({ ...other }: LinkProps) => (
  <Link {...other} underline="none" />
))({
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: 400,
  color: '#2a2a2a',
  transition: 'all .3s',
  backgroundColor: '#eee',
  width: '44px',
  height: '44px',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: '56px',
  borderRadius: '50%',
  '&:hover': {
    color: '#eee',
    backgroundColor: '#2a2a2a'
  }
});

const HoverBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.65)',
  opacity: 0,
  visibility: 'visible',
  transition: 'all 0.5s',
  '&:hover': {
    opacity: 1
  }
});

const Img = styled('img')({
  width: '100%',
  verticalAlign: 'top',
  overflow: 'hidden'
});

export default function AboutComponent() {
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
          Our Amazing Team
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
        {users.map((user) => {
          return (
            <Grid key={user.name} item sm={10} md={4}>
              <Box sx={{ position: 'relative' }}>
                <HoverBox>
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
                </HoverBox>
                <Img src={user.img} alt="Team Member" />
              </Box>
              <PoppinsTypography
                variant="h5"
                sx={{ fontWeight: 700, mt: 2 }}
              >
                {user.name}
              </PoppinsTypography>
              <PoppinsTypography variant="subtitle1" color="#a1a1a1">
                {user.position}
              </PoppinsTypography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
