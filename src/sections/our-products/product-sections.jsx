'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Yarn and Fabric',
    icon: 'mdi:scissors-cutting',
    backgroundImage: '/assets/images/services/Yarn.jpg',
    description: 'High-quality yarn and fabric tailored to your needs.',
    path: paths.services?.yarnAndFabric,
  },
  {
    title: 'Home',
    icon: 'fluent:home-20-regular',
    backgroundImage: '/assets/images/services/home.jpg',
    description: 'Home textiles to enhance comfort and aesthetics.',
    path: paths.services?.home,
  },
  {
    title: 'Hospitality',
    icon: 'mdi:gift-outline',
    backgroundImage: '/assets/images/services/medical.jpg',
    description: 'Hospitality solutions that bring comfort to your guests.',
    path: paths.services?.hospitality,
  },
  {
    title: 'Apparel',
    icon: 'mdi:tshirt-crew-outline',
    backgroundImage: '/assets/images/services/apparel.jpeg',
    description: 'Apparel with cutting-edge quality and style.',
    path: paths.services?.apparel,
  },
  {
    title: 'Medical & Healthcare',
    icon: 'mdi:medical-bag',
    backgroundImage: '/assets/images/services/health.jpg',
    description: 'We cater to all your medical product needs.',
    path: paths.services?.medicalHealthcare,
  },
];

// ----------------------------------------------------------------------

export function ProductsSection() {
  const theme = useTheme();

  return (
    <Container component={MotionViewport} sx={{ py: { xs: 3, md: 6, textAlign: 'center' } }}>
      <Typography variant="h3" sx={{ mb: { xs: 3, md: 5 } }}>
        Our Products
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {SERVICES.map((service) => (
          <Grid key={service.title} xs={12} sm={6} md={4} lg={2.4}>
            <m.div variants={varFade().inUp}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: `url(${service.backgroundImage})`,
                  height: { xs: 240, md: 300 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: `0 16px 32px ${theme.palette.grey[800]}`,
                    '& .initial-content': {
                      opacity: 0,
                      visibility: 'hidden',
                    },
                    '& .details': {
                      opacity: 1,
                      visibility: 'visible',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  }}
                />
                {/* Initial Content - Icon and Title */}
                <Box
                  className="initial-content"
                  sx={{
                    zIndex: 1,
                    color: 'common.white',
                    textAlign: 'center',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                  }}
                >
                  <Iconify icon={service.icon} width={48} />
                  <Typography variant="h5" sx={{ mt: 2 }}>
                    {service.title}
                  </Typography>
                </Box>

                {/* Hover Details - Description and Button */}
                <Box
                  className="details"
                  sx={{
                    zIndex: 2,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'common.white',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                  }}
                >
                  <Typography variant="body2" sx={{ mt: 1, maxWidth: 180 }}>
                    {service.description}
                  </Typography>

                  {service.path && (
                    <Button
                      component={RouterLink}
                      href={service.path}
                      endIcon={<Iconify width={16} icon="eva:arrow-ios-forward-fill" />}
                      sx={{
                        mt: 2,
                        color: 'common.white',
                        borderColor: 'common.white',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                      variant="outlined"
                    >
                      View
                    </Button>
                  )}
                </Box>
              </Box>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
