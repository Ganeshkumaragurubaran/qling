import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const CUSTOMERS = [
  { label: 'Retailers', icon: 'fluent:building-shop-20-regular' },
  { label: 'E-Tailers', icon: 'material-symbols:shopping-cart-outline' },
  { label: 'Importers', icon: 'mdi:airplane' },
  { label: 'Manufacturers', icon: 'ic:outline-factory' },
  { label: 'Brands', icon: 'fluent:building-retail-20-regular' },
  { label: 'Licensees', icon: 'mdi:certificate-outline' },
  { label: 'Sellers', icon: 'mdi:handshake-outline' },
  { label: 'Suppliers', icon: 'mdi:truck-outline' },
];

// ----------------------------------------------------------------------

export function OurCustomers() {
  const theme = useTheme();

  return (
    <Container component={MotionViewport} sx={{ py: { xs: 10, md: 15 }, textAlign: 'center' }}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Our Customers
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          variant="body1"
          sx={{ mb: 8, maxWidth: 600, mx: 'auto', color: 'text.secondary' }}
        >
          We have a wide customer base that uses our services in order to focus on their core
          business while we ensure the quality parameters set out are adhered to. These include:
        </Typography>
      </m.div>

      <Grid container spacing={6} sx={{ justifyContent: 'center' }}>
        {CUSTOMERS.map((customer) => (
          <Grid xs={6} sm={4} md={3} key={customer.label}>
            <m.div variants={varFade().inUp}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  bgcolor: theme.palette.grey[200],
                }}
              >
                <Iconify icon={customer.icon} width={40} />
              </Box>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {customer.label}
              </Typography>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
