import {
  Link as MaterialLink,
  LinkProps as MaterialLinkProps
} from '@mui/material';
import { Link as RouterDomLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const CustomLink = styled(
  (props: Omit<Props, 'label' | 'children'>) => (
    <MaterialLink {...props} component={RouterDomLink as any} />
  )
)({
  fontFamily: `'Poppins', sans-serif`,
  fontWeight: 400,
  transition: 'all .3s'
});

interface Props extends MaterialLinkProps {
  label?: string;
  to: string;
  children?: React.ReactNode;
}

export default function RouterLink({
  label,
  children,
  ...props
}: Props) {
  return (
    <CustomLink underline="none" {...props}>
      {label || children}
    </CustomLink>
  );
}
