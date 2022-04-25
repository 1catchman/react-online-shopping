import * as React from 'react';
import { useAppSelector } from '../redux/hooks';
import {
  cartProducts,
  quantity,
  totalPrice
} from '../redux/cartSlice';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const addresses = [
  '1 MUI Drive',
  'Reactville',
  'Anytown',
  '99999',
  'USA'
];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' }
];

export default function Review() {
  const cart = useAppSelector(cartProducts);
  const quantityProduct = useAppSelector(quantity);
  const total = useAppSelector(totalPrice);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={`Product ${index + 1}`}
              secondary={product.title}
            />
            <Typography variant="body2">
              {quantityProduct![product.id]
                ? `${quantityProduct![product.id]} x `
                : ''}
              ${product.price}.00
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${total}.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>
                    {payment.detail}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
