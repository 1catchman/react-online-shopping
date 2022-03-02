import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  Button
} from '@mui/material';
import leftBannerImage from '../images/left-banner-image.jpg';
import rightBannerImageFirst from '../images/baner-right-image-01.jpg';
import rightBannerImageSecond from '../images/baner-right-image-02.jpg';
import rightBannerImageThird from '../images/baner-right-image-03.jpg';
import rightBannerImageFourth from '../images/baner-right-image-04.jpg';

const itemData = [
  {
    title: 'Women',
    description: 'Best Clothes For Women',
    body: 'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
    img: rightBannerImageFirst
  },
  {
    title: 'Men',
    description: 'Best Clothes For Men',
    body: 'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
    img: rightBannerImageSecond
  },
  {
    title: 'Kids',
    description: 'Best Clothes For Kids',
    body: 'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
    img: rightBannerImageThird
  },
  {
    title: 'Accessories',
    description: 'Best Trend Accessories',
    body: 'Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.',
    img: rightBannerImageFourth
  }
];

const InnerBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white'
});

const HoverBox = styled(Box)({
  position: 'absolute',
  top: '15px',
  right: '15px',
  left: '15px',
  bottom: '15px',
  textAlign: 'center',
  backgroundColor: 'rgba(42, 42, 42, 0.97)',
  opacity: 0,
  visibility: 'visible',
  transition: 'all 0.5s',
  '&:hover': {
    opacity: 1
  }
});

const Img = styled('img')({
  width: '100%',
  overflow: 'hidden'
});

const CustomButton = styled(Button)({
  fontSize: '14px',
  textTransform: 'none',
  color: '#fff',
  border: '1px solid #fff',
  borderRadius: 0,
  padding: '12px 25px',
  display: 'inline-block',
  fontWeight: '500',
  transition: 'all .3s',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#2a2a2a',
    border: '1px solid #fff'
  }
});

export default function BannersComponent() {
  return (
    <Grid container columnSpacing={0.6} sx={{ px: 4 }}>
      <Grid item md sx={{ mx: 'auto' }}>
        <Box sx={{ my: 1.9, position: 'relative' }}>
          <InnerBox sx={{ left: '10%', pr: 3 }}>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              fontWeight={'700'}
            >
              We Are Hexashop
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ mb: '30px' }}
            >
              Custom, responsive &amp; adaptive Material-UI Template
            </Typography>
            <CustomButton variant="outlined">
              Purchase Now!
            </CustomButton>
          </InnerBox>
          <Img src={leftBannerImage} alt="Left Banner" />
        </Box>
      </Grid>
      <Grid item md xs={12} sx={{ mx: 'auto' }}>
        <ImageList sx={{ width: '100%' }} cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <InnerBox sx={{ width: '100%', textAlign: 'center' }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  fontWeight={'700'}
                >
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {item.description}
                </Typography>
              </InnerBox>
              <HoverBox>
                <InnerBox
                  sx={{
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    left: '50%'
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    fontWeight={'700'}
                    sx={{ mb: '15px' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ p: '0px 20px', mb: '20px' }}
                  >
                    {item.description}
                  </Typography>
                  <CustomButton variant="outlined">
                    Discover More
                  </CustomButton>
                </InnerBox>
              </HoverBox>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
