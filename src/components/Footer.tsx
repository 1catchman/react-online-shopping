import * as React from 'react';
import { Container, Box, Grid, Link, LinkProps } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PoppinsTypography } from './CustomComponents';
import RouterLink from './RouterLink';
import { menuLinks } from './Menu';
import DialogComponent from './Dialog';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import whiteLogo from '../images/white-logo.png';

const CustomLink = styled(({ ...other }: LinkProps) => (
  <Link {...other} underline="none" />
))({
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: 400,
  color: 'white',
  transition: 'all .3s',
  '&:hover': {
    color: '#aaa'
  }
});

export default function FooterComponent() {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ backgroundColor: '#2a2a2a' }}>
      <Container
        maxWidth={lgBreakpointUp ? 'lg' : 'md'}
        sx={{ pt: 10 }}
      >
        <Box sx={{ px: 3 }}>
          <Grid container columnSpacing={6} rowSpacing={4}>
            <Grid item lg={3} sm={6} md={6}>
              <Box sx={{ display: 'grid', gap: 2 }}>
                <img src={whiteLogo} alt="White Logo" />
                <PoppinsTypography sx={{ color: 'white' }}>
                  16501 Collins Ave, Sunny Isles Beach, FL 33160,
                  United States
                </PoppinsTypography>
                <PoppinsTypography sx={{ color: 'white' }}>
                  hexashop@company.com
                </PoppinsTypography>
                <PoppinsTypography sx={{ color: 'white' }}>
                  010-020-0340
                </PoppinsTypography>
              </Box>
            </Grid>
            <Grid item lg={3} sm={6} md={6}>
              <Box sx={{ display: 'grid', gap: 2 }}>
                <PoppinsTypography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: 'white' }}
                >
                  Shopping &amp; Categories
                </PoppinsTypography>

                <CustomLink href="#">Men’s Shopping</CustomLink>
                <CustomLink href="#">Women's Shopping</CustomLink>
                <CustomLink href="#">Kid's Shopping</CustomLink>
              </Box>
            </Grid>
            <Grid item lg={3} sm={6} md={6}>
              <Box sx={{ display: 'grid', gap: 2 }}>
                <PoppinsTypography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: 'white' }}
                >
                  Useful Links
                </PoppinsTypography>
                {menuLinks.map((link) => {
                  return (
                    <RouterLink
                      key={link.name}
                      to={link.to}
                      label={link.name}
                      sx={{
                        color: 'white',
                        '&:hover': { color: '#aaa' }
                      }}
                    />
                  );
                })}
              </Box>
            </Grid>
            <Grid item lg={3} sm={6} md={6}>
              <Box sx={{ display: 'grid', gap: 2 }}>
                <PoppinsTypography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, color: 'white' }}
                >
                  Help &amp; Information
                </PoppinsTypography>
                <DialogComponent />
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              borderTop: '1px solid rgba(250,250,250,0.3)',
              width: '100%',
              mt: 4,
              py: 4,
              textAlign: 'center'
            }}
          >
            <PoppinsTypography
              variant="subtitle1"
              sx={{ color: 'white' }}
            >
              Copyright &copy; 2022 HexaShop Co., Ltd. All Rights
              Reserved.
            </PoppinsTypography>
            <PoppinsTypography
              variant="subtitle1"
              sx={{ color: 'white', mb: 2 }}
            >
              Design:&nbsp;
              <CustomLink
                href="https://templatemo.com"
                target="_blank"
                rel="noopener"
              >
                TemplateMo
              </CustomLink>
            </PoppinsTypography>
            <CustomLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              sx={{ mr: 2 }}
            >
              <FacebookIcon fontSize="large" />
            </CustomLink>
            <CustomLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              sx={{ mr: 2 }}
            >
              <TwitterIcon fontSize="large" />
            </CustomLink>
            <CustomLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              sx={{ mr: 2 }}
            >
              <LinkedInIcon fontSize="large" />
            </CustomLink>
            <CustomLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon fontSize="large" />
            </CustomLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
