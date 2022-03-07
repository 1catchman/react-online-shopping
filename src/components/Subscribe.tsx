import * as React from 'react';
import { Container, Box, Grid, FormControl } from '@mui/material';
import { CustomInput, SendButton } from './CustomComponents';
import { PoppinsTypography } from '../utils/PoppinsTypography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SendIcon from '@mui/icons-material/Send';

const items = [
  {
    title: 'Store Location',
    body: 'Sunny Isles Beach, FL 33160, United States'
  },
  {
    title: 'Work Hours',
    body: '07:30 AM - 9:30 PM Daily'
  },
  {
    title: 'Phone',
    body: '010-020-0340'
  },
  {
    title: 'Email',
    body: 'info@company.com'
  },
  {
    title: 'Office Location',
    body: 'North Miami Beach'
  },
  {
    title: 'Social Media',
    body: 'Facebook, Instagram, Behance, Linkedin'
  }
];

export default function SubscribeComponent() {
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
    <Container
      maxWidth={lgBreakpointUp ? 'lg' : 'md'}
      sx={{ py: 10 }}
    >
      <Box sx={{ px: 3 }}>
        <Grid container rowSpacing={4} columnSpacing={10}>
          <Grid item sm={12} md={12} lg={7}>
            <Box sx={{ mb: 2 }}>
              <PoppinsTypography
                variant="h4"
                sx={{ fontWeight: 700 }}
              >
                By Subscribing To Our Newsletter You Can Get 30% Off
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
                gridTemplateColumns: { sm: '1fr 1fr auto' },
                columnGap: 4,
                rowGap: 1
              }}
            >
              <FormControl variant="standard">
                <CustomInput placeholder="Your Name" id="nameinput" />
              </FormControl>
              <FormControl variant="standard">
                <CustomInput
                  placeholder="Your Email Address"
                  id="emailinput"
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
          <Grid item sm={12} md={12} lg={5}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: 4,
                rowGap: 3
              }}
            >
              {items.map((item) => {
                return (
                  <Box key={item.title}>
                    <PoppinsTypography
                      variant="subtitle1"
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}:
                    </PoppinsTypography>
                    <PoppinsTypography
                      variant="body1"
                      color="#a1a1a1"
                    >
                      {item.body}
                    </PoppinsTypography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
