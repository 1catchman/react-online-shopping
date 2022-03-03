import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

const HamburgerButton = styled('a')({
  cursor: 'pointer',
  display: 'block',
  position: 'absolute',
  top: 10,
  width: 32,
  height: 40,
  textIndent: '-9999em',
  zIndex: '99',
  right: 16,
  '&.active span': {
    backgroundColor: 'transparent'
  },
  '&.active span:before': {
    MozTransform: 'translateY(6px) translateX(1px) rotate(45deg)',
    MsTransform: 'translateY(6px) translateX(1px) rotate(45deg)',
    WebkitTransform: 'translateY(6px) translateX(1px) rotate(45deg)',
    transform: 'translateY(6px) translateX(1px) rotate(45deg)',
    backgroundColor: '#1e1e1e',
    width: '100%'
  },
  '&.active span:after': {
    MozTransform: 'translateY(-6px) translateX(1px) rotate(-45deg)',
    MsTransform: 'translateY-(6px) translateX(1px) rotate(-45deg)',
    WebkitTransform:
      'translateY(-6px) translateX(1px) rotate(-45deg)',
    transform: 'translateY(-6px) translateX(1px) rotate(-45deg)',
    backgroundColor: '#1e1e1e',
    width: '100%'
  }
});

const HanburgerIcon = styled('span')({
  MozTransition: 'all 0.4s',
  WebkitTransition: 'all 0.4s',
  msTransition: 'all 0.4s',
  transition: 'all 0.4s',
  backgroundColor: '#1e1e1e',
  display: 'block',
  position: 'absolute',
  width: 30,
  height: 2,
  left: 0,
  top: 20,
  '&:before, &:after': {
    MozTransition: 'all 0.4s',
    WebkitTransition: 'all 0.4s',
    msTransition: 'all 0.4s',
    transition: 'all 0.4s',
    backgroundColor: '#1e1e1e',
    display: 'block',
    position: 'absolute',
    width: 30,
    height: 2,
    left: 0,
    content: '""'
  },
  '&:before': {
    width: '75%',
    transformOrigin: '33% 100%',
    top: -10,
    zIndex: 10
  },
  '&:after': {
    content: '""',
    width: '75%',
    transformOrigin: '33% 0',
    top: 10
  }
});

const StyledMenu = styled(Menu)({
  wdth: '100%',
  maxWidth: 540,
  '& .MuiPaper-root': {
    width: '100%',
    borderRadius: 0
  },
  '& .MuiMenuItem-root': {
    justifyContent: 'center'
  }
});

const CustomMenuItem = styled(MenuItem)({
  fontFamily: `'Poppins', sans-serif`,
  color: '#424242',
  textTransform: 'capitalize',
  fontWeight: '600',
  fontSize: 14,
  padding: '16px 0',
  '&:hover': {
    color: '#455a64'
  }
});

interface BasicMenuProps {
  appBarRef: React.MutableRefObject<HTMLDivElement | null>;
}

export default function BasicMenu({ appBarRef }: BasicMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<
    null | HTMLElement | HTMLDivElement
  >(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(appBarRef.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HamburgerButton
        id="basic-button"
        className={open ? 'active' : ''}
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <HanburgerIcon />
      </HamburgerButton>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <CustomMenuItem onClick={handleClose}>Profile</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>
          My account
        </CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Logout</CustomMenuItem>
      </StyledMenu>
    </>
  );
}
