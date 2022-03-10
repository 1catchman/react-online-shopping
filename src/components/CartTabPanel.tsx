import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  addProduct,
  removeProduct
} from '../features/cart/cartSlice';
import { quantity } from '../features/cart/cartSlice';
import { Box, Card, CardContent, CardMedia } from '@mui/material/';
import {
  CustomInput,
  PoppinsTypography,
  ToggleButton
} from './CustomComponents';
import { ProductsProps } from '../data/products';

interface TabPanelItem {
  item: ProductsProps;
}

export default function CartTabPanelComponent({
  item
}: TabPanelItem) {
  const ref = React.useRef(null);
  const quantityProduct = useAppSelector(quantity);
  const [count, setCount] = React.useState(
    quantityProduct![item.id] || 1
  );
  const [state, setState] = React.useState('flex');

  const dispatch = useAppDispatch();

  const countIncrement = () => {
    dispatch(addProduct(item));
    setCount(count + 1);
  };

  const countDecrement = () => {
    if (count > 1) {
      dispatch(removeProduct(item));
      setCount(count - 1);
    } else {
      dispatch(removeProduct(item));
      setState('none');
    }
  };

  return (
    <Card ref={ref} sx={{ display: state, p: 2 }} elevation={0}>
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 1
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <ToggleButton
              variant="outlined"
              onClick={countDecrement}
              sx={{
                borderRight: 0,
                '&:hover': { borderRight: 0 }
              }}
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
              onClick={countIncrement}
              sx={{
                borderLeft: 0,
                '&:hover': { borderLeft: 0 }
              }}
            >
              +
            </ToggleButton>
          </Box>
          <PoppinsTypography
            gutterBottom
            variant="subtitle1"
            sx={{ fontWeight: 600, m: 0 }}
          >
            ${count * item.price}.00
          </PoppinsTypography>
        </Box>
      </Box>
    </Card>
  );
}
