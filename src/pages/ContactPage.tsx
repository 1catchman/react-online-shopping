import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  FormControl,
  useFormControl,
  FormHelperText
} from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  PoppinsTypography,
  Img,
  CustomInput,
  SendButton,
  HeadingBox
} from '../components/CustomComponents';

import SendIcon from '@mui/icons-material/Send';
import aboutPageHeadingImage from '../images/about-us-page-heading.jpg';
import aboutPageSectionImage from '../images/about-left-image.jpg';
import SubscribeComponent from '../components/Subscribe';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

function MyFormHelperText(email?: any) {
  const { error } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (email.message) return email.message;
    return error ? 'This field is required' : null;
  }, [error, email]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function ContactPage() {
  const [loading, setLoading] = React.useState(false);
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const smBreakpointDown = useMediaQuery(
    theme.breakpoints.down('sm')
  );

  const {
    control,
    register,
    formState: { errors },
    resetField,
    handleSubmit
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
    setTimeout(() => {
      resetField('name');
      resetField('email');
      resetField('message');
      console.log('Submitted data', data);
      setLoading(false);
      alert('Data is submitted successfully');
    }, 2000);
  };

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
            <Img src={aboutPageSectionImage} alt="Section About" />
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
                Details to details is what makes Glamshopz different
                from the other themes.
              </PoppinsTypography>
            </Box>
            <Box
              component="form"
              noValidate
              autoComplete="off"
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
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => {
                    return (
                      <FormControl
                        error={errors.name?.type === 'required'}
                        variant="standard"
                      >
                        <CustomInput
                          placeholder="Your Name"
                          {...field}
                          {...register('name', {
                            required: true
                          })}
                        />
                        <MyFormHelperText />
                      </FormControl>
                    );
                  }}
                />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => {
                    return (
                      <FormControl
                        error={
                          errors.email?.type === 'required' ||
                          errors.email?.type === 'pattern'
                        }
                        variant="standard"
                      >
                        <CustomInput
                          placeholder="Your Email Address"
                          {...field}
                          {...register('email', {
                            required: true,
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: 'Enter the valid email address'
                            }
                          })}
                        />
                        <MyFormHelperText {...errors.email} />
                      </FormControl>
                    );
                  }}
                />
              </Box>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => {
                  return (
                    <FormControl
                      error={errors.message?.type === 'required'}
                      variant="standard"
                    >
                      <CustomInput
                        placeholder="Your message"
                        multiline
                        rows={4}
                        {...field}
                        {...register('message', {
                          required: true
                        })}
                      />
                      <MyFormHelperText />
                    </FormControl>
                  );
                }}
              />
              <SendButton
                onClick={handleSubmit(onSubmit)}
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
      <SubscribeComponent />
    </Box>
  );
}
