import * as React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { removeFavouriteProduct } from '../redux/favouritesSlice';
import { addProduct } from '../redux/cartSlice';
import { Box, Card, CardContent, CardMedia } from '@mui/material/';
import { CustomButton, PoppinsTypography } from './CustomComponents';
import { ProductsProps } from '../data/products';

interface TabPanelItem {
  item: ProductsProps;
}

export default function FavouritesTabItemComponent({
  item
}: TabPanelItem) {
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ display: 'flex', p: 2 }} elevation={0}>
      <CardMedia
        component="img"
        image={item.img}
        alt="Kid"
        sx={{ width: 120 }}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CardContent sx={{ flex: '1 0 auto', px: 1, py: 0 }}>
          <PoppinsTypography
            gutterBottom
            variant="subtitle1"
            sx={{ fontWeight: 500 }}
          >
            {item.title}
          </PoppinsTypography>
          <PoppinsTypography
            gutterBottom
            variant="body1"
            sx={{ fontWeight: 400 }}
          >
            ${item.price}.00
          </PoppinsTypography>
        </CardContent>
        <Box sx={{ display: 'flex', gap: 2, px: 1 }}>
          <CustomButton
            onClick={() => dispatch(addProduct(item))}
            color="black"
          >
            Buy
          </CustomButton>
          <CustomButton
            onClick={() => {
              dispatch(removeFavouriteProduct(item));
            }}
            color="black"
          >
            Remove
          </CustomButton>
        </Box>
      </Box>
    </Card>
  );
}
