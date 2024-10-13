import React from 'react';
import { m } from 'framer-motion';

import { Box, Grid, Card, Container, Typography, CardContent } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// Data for Our Values
const VALUES = [
  {
    title: 'One Family, Diversity',
    description: 'We are one family that values diversity.',
    icon: 'mdi:account-group-outline',
  },
  {
    title: 'Integrity & Accuracy',
    description: 'We always do the right thing. With accuracy, step, and desire.',
    icon: 'mdi:check-outline',
  },
  {
    title: 'Trust & Winning Together',
    description: 'We trust each other and are excited to win together.',
    icon: 'mdi:handshake-outline',
  },
  {
    title: 'Ownership & Future Focus',
    description: 'We own and form our future.',
    icon: 'mdi:rocket-launch-outline',
  },
  {
    title: 'Sustainable Evolution',
    description: 'We build sustainable evolution. For all.',
    icon: 'tabler:leaf',
  },
];

const LOCATIONS = [
  {
    title: 'Our Offices',
    description: `Registered in India, we have our own offices and teams at key manufacturing locations:
                  Delhi NCR, North Region, Mumbai, Gujarat, Maharashtra, Kolkata, Tamilnadu.`,
    icon: 'mdi:office-building-outline',
  },
  {
    title: 'Our Associates',
    description: `We provide our services at Bangladesh, Indonesia, Thailand through our associates.
                  Our customers prefer us for our Quality of work and Service levels.`,
    icon: 'mdi:earth',
  },
];

export const OurValues = () => (
    <Container component={MotionViewport} sx={{ py: { xs: 3, md: 6 } }}>
      {/* Section Title */}
      <Typography variant="h3" align="center" sx={{ mb: { xs: 5, md: 8 } }}>
        Our Values
      </Typography>

      {/* Values Section */}
      <Grid container spacing={4} justifyContent="center">
        {VALUES.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <m.div
              whileHover={{ y: -10, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              variants={varFade().inUp}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 1,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    bgcolor: 'grey.100',
                    borderRadius: '50%',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Iconify icon={item.icon} width={48} sx={{ color: 'primary.main' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>

      {/* Location Information Section */}
      <Typography variant="h3" align="center" sx={{ mt: { xs: 8, md: 12 }, mb: { xs: 5, md: 8 } }}>
        Our Locations
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {LOCATIONS.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <m.div
              whileHover={{ y: -10, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              variants={varFade().inUp}
              style={{ height: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 1,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    bgcolor: 'grey.100',
                    borderRadius: '50%',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Iconify icon={item.icon} width={48} sx={{ color: 'primary.main' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
