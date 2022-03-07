import * as React from 'react';
import { Box, Container, Grid, FormControl } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PoppinsTypography } from '../utils/PoppinsTypography';
import {
  CustomInput,
  SendButton,
  HeadingBox
} from '../components/CustomComponents';

import SendIcon from '@mui/icons-material/Send';
import aboutPageHeadingImage from '../images/about-us-page-heading.jpg';

export const CustomTextarea = styled('textarea')({
  width: '100%',
  height: 140,
  minHeight: 120,
  maxHeight: 200,
  maxWidth: '100%',
  padding: '0px 15px',
  fontSize: 14,
  fontStyle: 'italic',
  fontWeight: 500,
  color: '#aaa',
  borderRadius: 0,
  border: '1px solid #7a7a7a',
  boxShadow: 'none',
  fontFamily: 'Poppins',
  '&:focus': {
    borderColor: '#2a2a2a',
    borderRadius: 0
  }
});

export default function ContactPage() {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const smBreakpointDown = useMediaQuery(
    theme.breakpoints.down('sm')
  );
  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

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
          pb: 10
        }}
      >
        <Grid container spacing={6}>
          <Grid item md={12} lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830854996!2d-74.11976404949758!3d40.69766374879397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2skz!4v1646641162519!5m2!1sru!2skz"
              title="Google Map"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
            sx={{ textAlign: 'justify' }}
          >
            <Box sx={{ mb: 2 }}>
              <PoppinsTypography
                variant="h4"
                sx={{ fontWeight: 700 }}
              >
                Say Hello. Don't Be Shy!
              </PoppinsTypography>
              <PoppinsTypography
                variant="subtitle1"
                color="#a1a1a1"
                fontStyle="italic"
              >
                Details to details is what makes Hexashop different
                from the other themes.
              </PoppinsTypography>
            </Box>
            <Box
              component="form"
              noValidate
              sx={{
                display: 'grid',
                columnGap: 4,
                rowGap: 2
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { sm: '1fr 1fr' },
                  columnGap: 4,
                  rowGap: 2
                }}
              >
                <FormControl variant="standard">
                  <CustomInput
                    placeholder="Your Name"
                    id="nameinput"
                    required
                  />
                </FormControl>
                <FormControl variant="standard">
                  <CustomInput
                    placeholder="Your Email Address"
                    id="emailinput"
                    required
                  />
                </FormControl>
              </Box>
              <FormControl variant="standard">
                <CustomTextarea
                  placeholder="Your message"
                  id="messageinput"
                  required
                />
              </FormControl>
              <SendButton
                onClick={handleClick}
                loading={loading}
                loadingPosition="center"
                variant="contained"
                sx={{
                  alignSelf: 'center',
                  width: smBreakpointDown ? '100%' : 30
                }}
              >
                <SendIcon />
              </SendButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
