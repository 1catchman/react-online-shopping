import * as React from 'react';
import { Box, Card, CardContent, CardMedia } from '@mui/material/';
import {
  CustomInput,
  PoppinsTypography,
  ToggleButton
} from './CustomComponents';

import kidCartImage from '../images/kid-01.jpg';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

export default function CartTabPanelComponent(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index &&
        [...new Array(4)].map(() => {
          return (
            <Card sx={{ display: 'flex', p: 2 }} elevation={0}>
              <CardMedia
                component="img"
                image={kidCartImage}
                alt="Kid"
                sx={{ width: 120 }}
              />
              <Box
                sx={{
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
                    Agenda Short Pants
                  </PoppinsTypography>
                  <PoppinsTypography
                    gutterBottom
                    variant="body1"
                    sx={{ fontWeight: 400 }}
                  >
                    $90.00
                  </PoppinsTypography>
                </CardContent>
                <Box sx={{ display: 'flex', px: 1 }}>
                  <ToggleButton
                    variant="outlined"
                    sx={{
                      borderRight: 0,
                      '&:hover': { borderRight: 0 }
                    }}
                  >
                    -
                  </ToggleButton>
                  <CustomInput
                    id="ordersvalue"
                    defaultValue={1}
                    sx={{
                      width: 35,
                      height: 39,
                      padding: '0 5px',
                      fontStyle: 'normal',
                      color: 'black',
                      fontSize: 16,
                      borderColor: '#efefef',
                      minHeight: 39,
                      '& input': {
                        textAlign: 'center'
                      }
                    }}
                  />
                  <ToggleButton
                    variant="outlined"
                    sx={{
                      borderLeft: 0,
                      '&:hover': { borderLeft: 0 }
                    }}
                  >
                    +
                  </ToggleButton>
                </Box>
              </Box>
            </Card>
          );
        })}
    </div>
  );
}
