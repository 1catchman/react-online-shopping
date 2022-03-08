import {
  Container,
  Box,
  ImageList,
  ImageListItem,
  Typography
} from '@mui/material';
import { PoppinsTypography } from './CustomComponents';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/system';

import InstagramIcon from '@mui/icons-material/Instagram';
import firstInstagramImage from '../images/instagram-01.jpg';
import secondInstagramImage from '../images/instagram-02.jpg';
import thirdInstagramImage from '../images/instagram-03.jpg';
import fourthInstagramImage from '../images/instagram-04.jpg';
import fifthInstagramImage from '../images/instagram-05.jpg';
import sixthInstagramImage from '../images/instagram-06.jpg';

const items = [
  {
    name: 'Brand',
    img: firstInstagramImage
  },
  {
    name: 'New',
    img: secondInstagramImage
  },
  {
    name: 'Fashion',
    img: thirdInstagramImage
  },
  {
    name: 'Makeup',
    img: fourthInstagramImage
  },
  {
    name: 'Leather',
    img: fifthInstagramImage
  },
  {
    name: 'Bag',
    img: sixthInstagramImage
  }
];

const InnerBox = styled(Box)({
  position: 'absolute',
  bottom: '10%',
  color: 'white'
});

const HoverBox = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.65)',
  opacity: 0,
  visibility: 'visible',
  transition: 'all 0.5s',
  '&:hover': {
    opacity: 1
  }
});

export default function SocialMediaComponent() {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container
      maxWidth={lgBreakpointUp ? 'lg' : 'md'}
      sx={{ py: 10 }}
    >
      <Box sx={{ px: 3, mb: 6 }}>
        <PoppinsTypography variant="h3" sx={{ fontWeight: 700 }}>
          Social Media
        </PoppinsTypography>
        <PoppinsTypography
          variant="subtitle1"
          color="#a1a1a1"
          fontStyle="italic"
        >
          Details to details is what makes Hexashop different from the
          other themes.
        </PoppinsTypography>
        <ImageList
          sx={{ width: '100%', mt: 6 }}
          cols={lgBreakpointUp ? 6 : 3}
          gap={0}
        >
          {items.map((item) => {
            return (
              <ImageListItem key={item.name}>
                <HoverBox>
                  <InnerBox sx={{ p: '0px 20px' }}>
                    <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                      {item.name}
                    </Typography>
                    <InstagramIcon />
                  </InnerBox>
                </HoverBox>
                <img
                  alt="Instagram"
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </Container>
  );
}
