import {
  Typography,
  TypographyProps,
  InputBase,
  Button,
  ButtonProps,
  Box,
  BoxProps
} from '@mui/material/';
import { styled as defaultStyled } from '@mui/material/styles';
import { styled as legacyStyled } from '@mui/styles';
import LoadingButton from '@mui/lab/LoadingButton';

export const PoppinsTypography = defaultStyled(
  ({ ...other }: TypographyProps) => <Typography {...other} />
)({
  fontFamily: `Poppins, sans-serif`,
  fontWeight: 400,
  msTextSizeAdjust: '100%',
  webkitFontSmoothing: 'antialiased',
  mozOsxFontSmoothing: 'grayscale'
});

export const Img = defaultStyled('img')({
  width: '100%',
  overflow: 'hidden'
});

export const CustomInput = defaultStyled(InputBase)({
  width: '100%',
  minHeight: 44,
  maxHeight: 440,
  padding: '6px 15px',
  fontSize: 14,
  fontStyle: 'italic',
  fontWeight: 500,
  color: '#2a2a2a',
  borderRadius: 0,
  border: '1px solid #7a7a7a',
  boxShadow: 'none',
  fontFamily: 'Poppins',
  '&:focus': {
    borderColor: '#2a2a2a',
    borderRadius: 0
  }
});

export const SendButton = defaultStyled(LoadingButton)({
  boxShadow: 'none',
  height: 44,
  textTransform: 'none',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#2a2a2a',
  borderColor: '#2a2a2a',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#2a2a2a'
  }
});

export const ToggleButton = defaultStyled(Button)({
  borderRadius: 0,
  paddingInline: 14,
  minWidth: 34,
  height: 39,
  borderColor: '#efefef',
  color: 'black',
  WebkitTransition: 'all .3s',
  transition: 'all .3s',
  msTransition: 'all .3s',
  MozTransition: 'all .3s',
  '&:hover': {
    backgroundColor: '#efefef',
    border: '1px solid #efefef'
  }
});

interface CustomHeadingProps {
  img: string;
}

export const HeadingBox = legacyStyled(
  ({
    img,
    ...other
  }: CustomHeadingProps &
    Omit<BoxProps, keyof CustomHeadingProps>) => <Box {...other} />
)({
  background: 'no-repeat center center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: 400,
  width: '100%',
  overflow: 'hidden',
  color: 'white',
  backgroundSize: 'cover',
  backgroundImage: (props: CustomHeadingProps) => `url(${props.img})`
});

interface CustomButtonProps {
  color: 'white' | 'black';
}

export const CustomButton = legacyStyled(
  ({
    color,
    ...other
  }: CustomButtonProps &
    Omit<ButtonProps, keyof CustomButtonProps>) => (
    <Button {...other} />
  )
)({
  color: (props: CustomButtonProps) =>
    props.color === 'white' ? '#fff' : '#2a2a2a',
  borderColor: (props: CustomButtonProps) =>
    props.color === 'white' ? '#fff' : '#2a2a2a',
  border: '1px solid',
  fontSize: '13px',
  textTransform: 'none',
  borderRadius: 0,
  padding: '12px 25px',
  display: 'inline-block',
  fontWeight: '500',
  transition: 'all .3s',
  fontFamily: 'Poppins',
  '&:hover': {
    backgroundColor: (props: CustomButtonProps) =>
      props.color === 'white' ? '#fff' : '#2a2a2a',
    color: (props: CustomButtonProps) =>
      props.color === 'white' ? '#2a2a2a' : '#fff',
    borderColor: (props: CustomButtonProps) =>
      props.color === 'white' ? '#2a2a2a' : '#fff',
    border: '1px solid'
  }
});
