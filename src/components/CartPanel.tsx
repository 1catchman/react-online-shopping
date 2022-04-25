import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import {
  cartProducts,
  quantity,
  totalPrice
} from '../redux/cartSlice';
import { favoutireProducts } from '../redux/favouritesSlice';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Tabs,
  Tab,
  Paper,
  Box,
  Popper,
  ClickAwayListener,
  Badge
} from '@mui/material/';
import { PoppinsTypography, CustomButton } from './CustomComponents';
import CartTabItemComponent from './CartTabItem';
import FavouritesTabItemComponent from './FavouritesTabItem';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

export default function CartPanelComponent() {
  const cart = useAppSelector(cartProducts);
  const favourites = useAppSelector(favoutireProducts);
  const total = useAppSelector(totalPrice);
  const cartAmount = useAppSelector(quantity);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <button style={{ border: 0, background: 'transparent' }}>
        <Badge
          aria-label="delete"
          aria-describedby={id}
          badgeContent={cartAmount!.total || 0}
          onClick={handleClick}
          color="error"
          sx={{
            cursor: 'pointer',
            opacity: 0.8,
            '&:hover': { opacity: 1 }
          }}
        >
          <ShoppingCartIcon />
        </Badge>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="bottom-end"
          style={{ zIndex: 1200 }}
        >
          <Paper
            elevation={8}
            sx={{
              mt: 6,
              width: 394,
              height: 394,
              borderRadius: '2%',
              overflowY: 'scroll',
              pt: 6
            }}
          >
            <AppBar
              position="fixed"
              sx={{
                backgroundColor: '#fff',
                top: 48,
                right: 30,
                width: 349,
                borderBottom: '1px solid #dddddd',
                boxShadow: 0,
                color: '#2a2a2a',
                '& .MuiTabs-indicator': {
                  backgroundColor: '#2a2a2a'
                }
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Cart" {...a11yProps(0)} />
                <Tab label="Favourites" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <div
                role="tabpanel"
                hidden={value !== 0}
                id={`full-width-tabpanel-0`}
                aria-labelledby={`full-width-tab-0`}
                dir={theme.direction}
              >
                {value === 0 && cart.length > 0 ? (
                  cart.map((item) => (
                    <CartTabItemComponent key={item.id} item={item} />
                  ))
                ) : (
                  <PoppinsTypography
                    gutterBottom
                    variant="body1"
                    sx={{ fontWeight: 400, p: 2 }}
                  >
                    No Products
                  </PoppinsTypography>
                )}
              </div>
              <div
                role="tabpanel"
                hidden={value !== 1}
                id={`full-width-tabpanel-1`}
                aria-labelledby={`full-width-tab-1`}
                dir={theme.direction}
              >
                {value === 1 && favourites.length > 0 ? (
                  favourites.map((item) => (
                    <FavouritesTabItemComponent
                      key={item.id}
                      item={item}
                    />
                  ))
                ) : (
                  <PoppinsTypography
                    gutterBottom
                    variant="body1"
                    sx={{ fontWeight: 400, p: 2 }}
                  >
                    No Products
                  </PoppinsTypography>
                )}
              </div>
            </SwipeableViews>
            <Box sx={{ height: 54 }}></Box>
          </Paper>
          <Paper
            elevation={0}
            sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box>
              <PoppinsTypography
                gutterBottom
                variant="subtitle1"
                sx={{ fontWeight: 600, m: 0, px: 2 }}
              >
                Total: ${total}.00
              </PoppinsTypography>
            </Box>
            <Box>
              <Link to="/checkout">
                <CustomButton
                  color="black"
                  sx={{ backgroundColor: '#2a2a2a' }}
                >
                  <PoppinsTypography
                    gutterBottom
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      m: 0,
                      px: 2,
                      color: '#fff'
                    }}
                  >
                    Buy
                  </PoppinsTypography>
                </CustomButton>
              </Link>
            </Box>
          </Paper>
        </Popper>
      </button>
    </ClickAwayListener>
  );
}
