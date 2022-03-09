import * as React from 'react';
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
import CartTabPanelComponent from './CartTabPanel';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

export default function CartButtonComponent() {
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
          onClick={handleClick}
          variant="dot"
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
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <CartTabPanelComponent
                value={value}
                index={0}
                dir={theme.direction}
              />
              <CartTabPanelComponent
                value={value}
                index={1}
                dir={theme.direction}
              />
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
                Total: $280.00
              </PoppinsTypography>
            </Box>
            <Box>
              <CustomButton
                color="black"
                sx={{ backgroundColor: '#2a2a2a' }}
              >
                <PoppinsTypography
                  gutterBottom
                  variant="subtitle1"
                  sx={{ fontWeight: 600, m: 0, px: 2, color: '#fff' }}
                >
                  Buy
                </PoppinsTypography>
              </CustomButton>
            </Box>
          </Paper>
        </Popper>
      </button>
    </ClickAwayListener>
  );
}