import * as React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  children: React.ReactElement;
}

export default function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      py: trigger ? 2 : 4,
      backgroundColor: '#f7f7f7',
      transition: 'all .5s ease 0s'
    }
  });
}
