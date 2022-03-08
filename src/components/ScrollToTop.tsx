import * as React from 'react';
import { useScrollTrigger, Zoom, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactElement;
}

export const ScrollToTop = ({ children }: Props) => {
  const { pathname } = useLocation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 800
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};
