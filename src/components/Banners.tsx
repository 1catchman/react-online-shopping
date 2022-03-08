import { styled } from '@mui/material/styles';
import { Box, Grid, ImageList, ImageListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  PoppinsTypography,
  Img,
  CustomButton
} from './CustomComponents';

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

export default function BannersComponent() {
  const theme = useTheme();
  const mdBreakpointUp = useMediaQuery(theme.breakpoints.up('md'));
  const mlBreakpointBetween = useMediaQuery(
    theme.breakpoints.between('md', 'lg')
  );
  const smBreakpointDown = useMediaQuery(
    theme.breakpoints.down('sm')
  );

  return (
    <Grid
      container
      columnSpacing={0.1}
      sx={{
        mx: 'auto',
        px: 2,
        pb: 10,
        maxWidth: mdBreakpointUp ? null : 790
      }}
    >
      <Grid item md>
        <Box
          sx={{
            my: 2,
            position: 'relative',
            mb: `${mdBreakpointUp ? null : '-18px'}`
          }}
        >
          <InnerBox sx={{ left: '10%', pr: 3 }}>
            <PoppinsTypography
              gutterBottom
              variant="h2"
              sx={{ fontWeight: 700 }}
            >
              We Are Hexashop
            </PoppinsTypography>
            <PoppinsTypography
              variant="subtitle1"
              sx={{ mb: '30px' }}
            >
              Custom, responsive &amp; adaptive Material-UI Template
            </PoppinsTypography>
            <CustomButton variant="outlined" color="white">
              Purchase Now!
            </CustomButton>
          </InnerBox>
          <Img
            src={leftBannerImage}
            alt="Left Banner"
            style={
              mdBreakpointUp ? { width: '99.7%' } : { width: '100%' }
            }
          />
        </Box>
      </Grid>
      <Grid item md xs={12} sx={{ mx: 'auto' }}>
        <ImageList sx={{ width: '100%' }} cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <InnerBox sx={{ width: '100%', textAlign: 'center' }}>
                <PoppinsTypography
                  gutterBottom
                  variant="h4"
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </PoppinsTypography>
                <PoppinsTypography variant="subtitle1">
                  {item.description}
                </PoppinsTypography>
              </InnerBox>
              <HoverBox>
                <InnerBox
                  sx={{
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    left: '50%'
                  }}
                >
                  {smBreakpointDown ? null : (
                    <PoppinsTypography
                      gutterBottom
                      variant={mlBreakpointBetween ? 'h5' : 'h4'}
                      sx={{ mb: '15px', fontWeight: 700 }}
                    >
                      {item.title}
                    </PoppinsTypography>
                  )}
                  <PoppinsTypography
                    variant="body2"
                    sx={{ p: '0px 20px', mb: '20px' }}
                  >
                    {item.description}
                  </PoppinsTypography>
                  <CustomButton
                    color="white"
                    variant="outlined"
                    style={
                      mlBreakpointBetween || smBreakpointDown
                        ? { padding: '8px 16px', fontSize: '11px' }
                        : {}
                    }
                  >
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
