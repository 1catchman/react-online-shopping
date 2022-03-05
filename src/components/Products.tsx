import {
  Container,
  Box,
  Card,
  Rating,
  Grid,
  CardMedia,
  Stack,
  ImageList,
  ImageListItem,
  Button,
  IconButton
} from '@mui/material';
import { Carousel } from '@trendyol-js/react-carousel';
import { PoppinsTypography } from '../utils/PoppinsTypography';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import menProductImage01 from '../images/men-01.jpg';
import firstExploreImage from '../images/explore-image-01.jpg';
import secondExploreImage from '../images/explore-image-02.jpg';

const items = [
  {
    name: 'Name #1',
    description: 'Probably the most random thing you have ever seen!'
  },
  {
    name: 'Name #2',
    description: 'Hello World!'
  },
  {
    name: 'Name #3',
    description: 'Hello World!'
  },
  {
    name: 'Name #4',
    description: 'Hello World!'
  },
  {
    name: 'Name #5',
    description: 'Hello World!'
  },
  {
    name: 'Name #6',
    description: 'Hello World!'
  }
];

const Img = styled('img')({
  width: '100%',
  overflow: 'hidden'
});

const CarouselButton = styled(IconButton)({
  padding: 8,
  top: '30%',
  borderRadius: 0,
  border: '1px solid #2a2a2a',
  opacity: 0.6,
  '&:hover': {
    opacity: 1
  }
});

const CardButton = styled(IconButton)({
  padding: 8,
  color: '#2a2a2a',
  borderRadius: 0,
  border: '1px solid #fff',
  backgroundColor: '#fff',
  transition: 'all .3s',
  transform: 'translateY(10%)',
  '&:hover': {
    transform: 'translateY(0)',
    color: '#fff',
    borderRadius: 0,
    border: '1px solid #2a2a2a',
    backgroundColor: '#2a2a2a'
  }
});

const CustomButton = styled(Button)({
  fontSize: '13px',
  textTransform: 'none',
  border: '1px solid #2a2a2a',
  borderRadius: 0,
  padding: '12px 25px',
  display: 'inline-block',
  fontWeight: '500',
  transition: 'all .3s',
  backgroundColor: '#fff',
  color: '#2a2a2a',
  fontFamily: 'Poppins',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#2a2a2a'
  }
});

const HoverBox = styled(Box)({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'end',
  gridTemplateColumns: 'repeat(3, 1fr)',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: 'transparent',
  opacity: 0,
  visibility: 'visible',
  transition: 'all 0.5s',
  '&:hover': {
    opacity: 1
  }
});

export default function ProductsComponent() {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container
      maxWidth={lgBreakpointUp ? 'lg' : 'md'}
      sx={{ pt: 10 }}
    >
      <Box sx={{ px: 3, pb: 10 }}>
        <Box sx={{ mb: 6 }}>
          <PoppinsTypography variant="h3" sx={{ fontWeight: 700 }}>
            Men's Latest
          </PoppinsTypography>
          <PoppinsTypography
            variant="subtitle1"
            color="#a1a1a1"
            fontStyle="italic"
          >
            Details to details is what makes Hexashop different from
            the other themes.
          </PoppinsTypography>
        </Box>
        <Carousel
          show={3}
          slide={1}
          transition={0.5}
          swiping={true}
          swipeOn={0.1}
          rightArrow={
            <CarouselButton area-label="rightarrow" size="small">
              <ArrowForwardIosIcon />
            </CarouselButton>
          }
          leftArrow={
            <CarouselButton area-label="leftarrow" size="small">
              <ArrowBackIosIcon />
            </CarouselButton>
          }
        >
          {items.map((item) => (
            <CarouselItem key={item.name} props={item} />
          ))}
        </Carousel>
      </Box>
      <Box sx={{ py: 10, flexGrow: 1 }}>
        <Grid container rowSpacing={6}>
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
              Explore Our Products
            </PoppinsTypography>
            <PoppinsTypography
              variant="subtitle1"
              color="#a1a1a1"
              mt={3}
            >
              You are allowed to use this HexaShop HTML CSS template.
              You can feel free to modify or edit this layout. You can
              convert this template as any kind of ecommerce CMS theme
              as you wish.
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
                You are not allowed to redistribute this template ZIP
                file on any other website.
              </PoppinsTypography>
            </Stack>
            <PoppinsTypography
              variant="subtitle1"
              color="#a1a1a1"
              mt={3}
            >
              There are 5 pages included in this HexaShop Template and
              we are providing it to you for absolutely free of charge
              at our TemplateMo website. There are web development
              costs for us.
            </PoppinsTypography>
            <PoppinsTypography
              variant="subtitle1"
              color="#a1a1a1"
              mt={3}
            >
              If this template is beneficial for your website or
              business, please kindly support us a little via PayPal.
              Please also tell your friends about our great website.
              Thank you.
            </PoppinsTypography>
            <CustomButton sx={{ mt: 5 }}>Discover More</CustomButton>
          </Grid>
          <Grid item md={12} lg={6} sx={{ mx: 'auto', flexGrow: 1 }}>
            <ImageList sx={{ width: '100%' }} cols={2} gap={8}>
              <ImageListItem>
                <Box
                  sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#f8f8f8',
                    display: 'flex'
                  }}
                >
                  <Box sx={{ margin: 'auto', textAlign: 'center' }}>
                    <PoppinsTypography
                      variant="h5"
                      sx={{ fontWeight: 700 }}
                    >
                      Leather Bags
                    </PoppinsTypography>
                    <PoppinsTypography
                      fontStyle="italic"
                      variant="subtitle2"
                      color="#a1a1a1"
                    >
                      Latest Collection
                    </PoppinsTypography>
                  </Box>
                </Box>
              </ImageListItem>
              <ImageListItem>
                <Img
                  alt="First Explore"
                  src={`${firstExploreImage}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${firstExploreImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <Img
                  alt="Second Explore"
                  src={`${secondExploreImage}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${secondExploreImage}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItem>
                <Box
                  sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#f8f8f8',
                    display: 'flex'
                  }}
                >
                  <Box sx={{ margin: 'auto', textAlign: 'center' }}>
                    <PoppinsTypography
                      variant="h5"
                      sx={{ fontWeight: 700 }}
                    >
                      Different Type
                    </PoppinsTypography>
                    <PoppinsTypography
                      fontStyle="italic"
                      variant="subtitle2"
                      color="#a1a1a1"
                    >
                      Over 304 Products
                    </PoppinsTypography>
                  </Box>
                </Box>
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

function CarouselItem({ props }: any) {
  return (
    <Card
      sx={{ maxWidth: 350, borderRadius: 0, mx: 1 }}
      elevation={0}
    >
      <Box sx={{ position: 'relative' }}>
        <HoverBox>
          <CardButton area-label="openproduct" size="small">
            <VisibilityIcon />
          </CardButton>
          <CardButton area-label="favouriteproduct" size="small">
            <StarIcon />
          </CardButton>
          <CardButton area-label="addproduct" size="small">
            <ShoppingCartIcon />
          </CardButton>
        </HoverBox>
        <CardMedia
          component="img"
          alt="Men Product"
          image={menProductImage01}
          sx={{ mb: 2, pointerEvents: 'none', flexGrow: 1 }}
        />
      </Box>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ zIndex: 10 }}
      >
        <Grid item>
          <PoppinsTypography
            gutterBottom
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            {props.name}
          </PoppinsTypography>
        </Grid>
        <Grid item>
          <Rating name="size-small" defaultValue={2} size="small" />
        </Grid>
      </Grid>
      <PoppinsTypography gutterBottom variant="h5" color="#a1a1a1">
        $120.00
      </PoppinsTypography>
    </Card>
  );
}
