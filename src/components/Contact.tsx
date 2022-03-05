import * as React from 'react';
import {
  Container,
  Box,
  Grid,
  FormControl,
  InputBase
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { PoppinsTypography } from '../utils/PoppinsTypography';
import { useTheme, styled } from '@mui/material/styles';
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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor:
      theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    width: '100%',
    padding: '12px 14px',
    margin: '3px 0',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: 'Poppins',
    '&:focus': {
      borderRadius: 4,
      border: '1px solid #000'
    }
  }
}));

const SendButton = styled(LoadingButton)({
  boxShadow: 'none',
  height: 47,
  textTransform: 'none',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#2a2a2a',
  borderColor: '#2a2a2a',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#2a2a2a'
  }
});

export default function ContactComponent() {
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
                <BootstrapInput
                  placeholder="Your Name"
                  id="nameinput"
                />
              </FormControl>
              <FormControl variant="standard">
                <BootstrapInput
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
                  <Box>
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
