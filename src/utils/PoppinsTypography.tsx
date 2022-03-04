import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/system';

export const PoppinsTypography = styled(
  ({ ...other }: TypographyProps) => <Typography {...other} />
)({
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: 400
});
