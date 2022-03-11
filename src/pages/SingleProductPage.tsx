import * as React from 'react';
import {
  useMediaQuery,
  Stack,
  Box,
  Container,
  Grid,
  Rating
} from '@mui/material/';
import { useLocation } from 'react-router-dom';
import { useTheme, styled } from '@mui/material/styles';
import {
  PoppinsTypography,
  CustomInput,
  CustomButton,
  HeadingBox,
  ToggleButton
} from '../components/CustomComponents';
import { products } from '../data/products';
import { useAppDispatch } from '../redux/hooks';
import { addAmountProducts } from '../redux/cartSlice';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import productsPageHeadingImage from '../images/products-page-heading.jpg';
import firstSingleProductImage from '../images/single-product-01.jpg';
import secondSingleProductImage from '../images/single-product-02.jpg';

const Img = styled('img')({
  width: '100%',
  verticalAlign: 'top',
  overflow: 'hidden'
});

export default function SingleProductPage() {
  const [count, setCount] = React.useState(1);
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  const dispatch = useAppDispatch();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const selectedProduct = products.find(
    (item) => item.id === Number(query.get('id'))
  );

  const countIncrement = () => {
    setCount(count + 1);
  };

  const countDecrement = () => {
    count > 1 && setCount(count - 1);
  };

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
          <Grid item container md={12} lg={8}>
            <Img
              src={firstSingleProductImage}
              alt="Single Product"
              sx={{ mb: 3 }}
            />
            <Img
              src={secondSingleProductImage}
              alt="Single Product"
            />
          </Grid>
          <Grid item md={12} lg={4}>
            {selectedProduct && (
              <Img
                src={selectedProduct!.img}
                alt={selectedProduct!.title}
              />
            )}
            <PoppinsTypography
              gutterBottom
              variant="h5"
              sx={{ fontWeight: 700, mt: 3 }}
            >
              {selectedProduct ? selectedProduct!.title : 'Title'}
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
                  ${selectedProduct ? selectedProduct!.price : '00'}
                  .00
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
                  onClick={countDecrement}
                >
                  -
                </ToggleButton>
                <CustomInput
                  id="ordersvalue"
                  value={count}
                  sx={{
                    width: 35,
                    height: 39,
                    padding: '0 5px',
                    fontStyle: 'normal',
                    color: 'black',
                    fontSize: 16,
                    borderColor: '#efefef',
                    minHeight: 39,
                    cursor: 'default',
                    '& input': {
                      cursor: 'default',
                      textAlign: 'center'
                    }
                  }}
                />
                <ToggleButton
                  variant="outlined"
                  sx={{
                    borderLeft: 0,
                    '&:hover': { borderLeft: 0 }
                  }}
                  onClick={countIncrement}
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
                <CustomButton
                  variant="outlined"
                  color="black"
                  onClick={() =>
                    dispatch(
                      addAmountProducts(
                        [...new Array(count)].map(
                          () => selectedProduct!
                        )
                      )
                    )
                  }
                >
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
