import {
  useMediaQuery,
  Stack,
  Box,
  Container,
  Grid,
  Rating,
  Button
} from '@mui/material/';
import { useTheme, styled } from '@mui/material/styles';
import { PoppinsTypography } from '../utils/PoppinsTypography';
import {
  CustomInput,
  CustomButton,
  HeadingBox
} from '../components/CustomComponents';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import productsPageHeadingImage from '../images/products-page-heading.jpg';
import firstSingleProductImage from '../images/single-product-01.jpg';
import secondSingleProductImage from '../images/single-product-02.jpg';

const Img = styled('img')({
  width: '100%',
  verticalAlign: 'top',
  overflow: 'hidden'
});

const ToggleButton = styled(Button)({
  borderRadius: 0,
  paddingInline: 14,
  minWidth: 34,
  height: 39,
  borderColor: '#efefef',
  color: 'black',
  WebkitTransition: 'all .3s',
  transition: 'all .3s',
  msTransition: 'all .3s',
  MozTransition: 'all .3s',
  '&:hover': {
    backgroundColor: '#efefef',
    border: '1px solid #efefef'
  }
});

export default function SingleProductPage() {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box>
      <HeadingBox
        img={productsPageHeadingImage}
        sx={{
          my: 10
        }}
      >
        <PoppinsTypography
          gutterBottom
          variant="h2"
          sx={{ fontWeight: 700 }}
        >
          Single Product Page
        </PoppinsTypography>
        <PoppinsTypography variant="subtitle1">
          Custom, responsive &amp; adaptive Material-UI Template
        </PoppinsTypography>
      </HeadingBox>
      <Container
        maxWidth={lgBreakpointUp ? 'lg' : 'md'}
        sx={{ mb: 10 }}
      >
        <Grid container spacing={4}>
          <Grid item md={12} lg={8} spacing={4}>
            <Img src={firstSingleProductImage} alt="Single Product" />
            <Img
              src={secondSingleProductImage}
              alt="Single Product"
            />
          </Grid>
          <Grid item md={12} lg={4}>
            <PoppinsTypography
              gutterBottom
              variant="h5"
              sx={{ fontWeight: 700 }}
            >
              Title
            </PoppinsTypography>

            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <PoppinsTypography
                  gutterBottom
                  variant="h5"
                  color="#a1a1a1"
                  sx={{ mb: 0 }}
                >
                  $00.00
                </PoppinsTypography>
              </Grid>
              <Grid item>
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                />
              </Grid>
            </Grid>
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
              my={3}
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
            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: 3 }}
            >
              <Grid item>
                <PoppinsTypography
                  gutterBottom
                  variant="h5"
                  color="#a1a1a1"
                  sx={{ fontWeight: 600, mb: 0 }}
                >
                  No. of Orders
                </PoppinsTypography>
              </Grid>
              <Grid item sx={{ display: 'flex' }}>
                <ToggleButton
                  variant="outlined"
                  sx={{
                    borderRight: 0,
                    '&:hover': { borderRight: 0 }
                  }}
                >
                  -
                </ToggleButton>
                <CustomInput
                  id="ordersvalue"
                  defaultValue={1}
                  sx={{
                    width: 35,
                    height: 39,
                    padding: '0 5px',
                    textAlign: 'center',
                    fontStyle: 'normal',
                    color: 'black',
                    fontSize: 16,
                    borderColor: '#efefef'
                  }}
                />
                <ToggleButton
                  variant="outlined"
                  sx={{
                    borderLeft: 0,
                    '&:hover': { borderLeft: 0 }
                  }}
                >
                  +
                </ToggleButton>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: 3 }}
            >
              <Grid item>
                <PoppinsTypography
                  gutterBottom
                  variant="h5"
                  color="#a1a1a1"
                  sx={{ fontWeight: 600, mb: 0 }}
                >
                  Total: $
                </PoppinsTypography>
              </Grid>
              <Grid item sx={{ display: 'flex' }}>
                <CustomButton variant="outlined" color="black">
                  Add to Cart
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
