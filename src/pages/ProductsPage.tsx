import * as React from 'react';
import {
  useMediaQuery,
  Pagination,
  PaginationItem,
  Box,
  Container
} from '@mui/material/';
import { HeadingBox } from '../components/CustomComponents';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { products, totalPage } from '../data/products';
import ProductsItem from '../components/ProductsItem';
import { PRODUCTS_PER_PAGE } from '../utils/constants';
import { PoppinsTypography } from '../utils/PoppinsTypography';
import productsPageHeadingImage from '../images/products-page-heading.jpg';

export default function ProductsPage() {
  const theme = useTheme();
  const lgBreakpointUp = useMediaQuery(theme.breakpoints.up('lg'));
  const mdBreakpointDown = useMediaQuery(
    theme.breakpoints.down('md')
  );

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get('page') || '1', 10);
  const initialValue = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const selectedProducts = products.slice(
    initialValue,
    initialValue + PRODUCTS_PER_PAGE
  );

  return (
    <Box>
      <HeadingBox
        img={productsPageHeadingImage}
        sx={{
          my: 10
        }}
      >
        <PoppinsTypography
          gutterBottom
          variant="h2"
          sx={{ fontWeight: 700 }}
        >
          Check Our Products
        </PoppinsTypography>
        <PoppinsTypography variant="subtitle1">
          Custom, responsive &amp; adaptive Material-UI Template
        </PoppinsTypography>
      </HeadingBox>

      <Container
        maxWidth={lgBreakpointUp ? 'lg' : 'md'}
        sx={{ py: 10 }}
      >
        <Box
          sx={{
            px: 3,
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              mb: 8
            }}
          >
            <PoppinsTypography variant="h3" sx={{ fontWeight: 700 }}>
              Our Latest Products
            </PoppinsTypography>
            <PoppinsTypography
              variant="subtitle1"
              color="#a1a1a1"
              fontStyle="italic"
            >
              Check out all of our products.
            </PoppinsTypography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(${
                mdBreakpointDown ? '2' : '3'
              }, 1fr)`,
              columnGap: 2,
              rowGap: mdBreakpointDown ? 2 : 4
            }}
          >
            {selectedProducts.map((item) => (
              <ProductsItem key={item.id} props={item} />
            ))}
          </Box>
          <Pagination
            sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}
            page={currentPage}
            count={totalPage}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/products${
                  item.page === 1 ? '' : `?page=${item.page}`
                }`}
                {...item}
              />
            )}
          />
        </Box>
      </Container>
    </Box>
  );
}
