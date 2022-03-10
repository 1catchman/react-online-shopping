import { useAppDispatch } from '../app/hooks';
import { addProduct } from '../features/cart/cartSlice';
import {
  Box,
  Card,
  Rating,
  Grid,
  CardMedia,
  IconButton
} from '@mui/material';
import { styled } from '@mui/system';
import { PoppinsTypography } from './CustomComponents';

import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RouterLink from './RouterLink';

const CardButton = styled(IconButton)({
  padding: 8,
  color: '#2a2a2a',
  borderRadius: 0,
  border: '1px solid #fff',
  backgroundColor: '#fff',
  transition: 'all .3s',
  transform: 'translateY(10%)',
  width: '100%',
  '&:hover': {
    transform: 'translateY(0)',
    color: '#fff',
    borderRadius: 0,
    border: '1px solid #2a2a2a',
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

export default function ProductsItem({ props }: any) {
  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{ maxWidth: 350, borderRadius: 0, mx: 1 }}
      elevation={0}
    >
      <Box sx={{ position: 'relative' }}>
        <HoverBox>
          <RouterLink to={`/product?id=${props.id}`}>
            <CardButton area-label="openproduct" size="small">
              <VisibilityIcon />
            </CardButton>
          </RouterLink>
          <CardButton area-label="favouriteproduct" size="small">
            <StarIcon />
          </CardButton>
          <CardButton
            onClick={() => dispatch(addProduct(props))}
            area-label="addproduct"
            size="small"
          >
            <ShoppingCartIcon />
          </CardButton>
        </HoverBox>
        <CardMedia
          component="img"
          alt={props.title}
          image={props.img}
          sx={{ mb: 2, pointerEvents: 'none', flexGrow: 1 }}
        />
      </Box>
      <PoppinsTypography
        gutterBottom
        variant="h5"
        sx={{ fontWeight: 700, pointerEvents: 'none' }}
      >
        {props.title}
      </PoppinsTypography>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <PoppinsTypography
            gutterBottom
            variant="h5"
            color="#a1a1a1"
            sx={{ mb: 0, pointerEvents: 'none' }}
          >
            ${props.price}.00
          </PoppinsTypography>
        </Grid>
        <Grid item>
          <Rating name="size-small" defaultValue={2} size="small" />
        </Grid>
      </Grid>
    </Card>
  );
}
