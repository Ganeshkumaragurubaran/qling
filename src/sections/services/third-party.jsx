import React from 'react';
import { m } from 'framer-motion';

import { Box, Grid, Card, Container, Typography, CardContent } from '@mui/material';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// Data for Audit and Inspection Services with background image paths
const services = [
  {
    title: 'Pre-Production Inspection',
    description:
      'Verify that the factory understands your requirements and expectations before commencing production. Check specifications, quality standards, testing, and packaging preparedness.',
    icon: 'wpf:inspection',
    backgroundImage: '/assets/images/services/image6.jpeg',
  },
  {
    title: 'Initial Production Inspection',
    description:
      'Inspect quality and conformity when approximately 20% of production is complete. This ensures early quality control and provides an opportunity for timely corrective actions.',
    icon: 'mdi:progress-check',
    backgroundImage: '/assets/images/services/image2.jpeg', // Add background image path
  },
  {
    title: 'During Production Inspection',
    description:
      'Inspect production at the 50% completion stage to minimize the risk of quality issues during the final pre-shipment inspection, leaving more time for necessary corrections.',
    icon: 'mdi:clipboard-check-outline',
    backgroundImage: '/assets/images/services/image3.jpeg', // Add background image path
  },
  {
    title: 'Pre-Shipment Inspection',
    description:
      'Conduct final inspection when 80% of the products are packed into shipping cartons to ensure that everything is in accordance with requirements before shipment.',
    icon: 'mdi:package-variant-closed',
    backgroundImage: '/assets/images/services/image8.jpeg', // Add background image path
  },
  {
    title: 'Container Loading Supervision',
    description:
      'Supervise the cargo loading process to verify product quality, quantity, packing conditions, and the sealing process before shipment.',
    icon: 'mdi:truck-outline',
    backgroundImage: '/assets/images/services/image4.jpeg', // Add background image path
  },
  {
    title: '100% Inspection',
    description:
      'Sort out good units from a failed shipment. Conduct a 100% inspection if the customer is willing to approve a short shipment.',
    icon: 'mdi:checkbox-marked-outline',
    backgroundImage: '/assets/images/services/image9.jpeg', // Add background image path
  },
  // {
  //   title: 'Supplier Quality Assessment (SQA)',
  //   description:
  //     'Gain insight into whether the factory is technically capable, has the required quality systems in place, and has the necessary production capability/capacity.',
  //   icon: 'mdi:account-search-outline',
  //   backgroundImage: '/assets/images/services/image7.jpeg', // Add background image path
  // },
  // {
  //   title: 'Supplier Compliance Assessment (SCA)',
  //   description:
  //     'Conduct a thorough factory compliance audit based on your customer’s or brand’s compliance protocols.',
  //   icon: 'mdi:shield-check-outline',
  //   backgroundImage: '/assets/images/services/image1.jpeg', // Add background image path
  // },
  // {
  //   title: 'Supply Chain Security Assessment (SSA)',
  //   description:
  //     'Audit the factory as per US Customs and Border Protection guidelines to check preparedness for Cargo and Container security & stop shipping non-manifested materials.',
  //   icon: 'mdi:security',
  //   backgroundImage: '/assets/images/services/image9.jpeg', // Add background image path
  // },
  // {
  //   title: 'Factory Training & Monitoring',
  //   description:
  //     'Based on evaluation, we provide customized training, monitoring, and review programs to help factories overcome technical, quality, and compliance shortcomings.',
  //   icon: 'mdi:school-outline',
  //   backgroundImage: '/assets/images/services/image10.jpeg', // Add background image path
  // },
];

export function ThirdPartyInspection({ sx, ...other }) {
  return (
    <Container component={MotionViewport} sx={{ py: { xs: 5, md: 10 } }}>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={service.title}>
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
                  backgroundImage: `url(${CONFIG.site.basePath}/assets/background/overlay1.svg), url(${service.backgroundImage})`, // Use background image dynamically
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white', // Ensures text visibility
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
                    bgcolor: 'rgba(255, 255, 255, 0.5)', // Transparent white background for icon container
                    borderRadius: '50%',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <Iconify icon={service.icon} width={48} sx={{ color: 'primary.main' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
