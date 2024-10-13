import React from 'react';
import { m } from 'framer-motion';
import { FiShield, FiBookOpen, FiClipboard, FiCheckCircle } from 'react-icons/fi';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';

// Data for Audit Services
const AUDIT_SERVICES = [
  {
    title: 'Supply Chain Security Assessment',
    description:
      'Auditing factories as per ‘US Customs and Border Protection’ guidelines to ensure readiness for cargo and container security, preventing shipping of non-manifested materials.',
    icon: FiShield,
    backgroundImage: '/assets/images/services/image1.jpeg',
    iconColor: 'blue',
  },
  {
    title: 'Supplier Quality Assessment (SQA)',
    description:
      'Evaluates the technical capabilities of factories, ensuring they have the required quality systems and production capacity in place.',
    icon: FiCheckCircle,
    backgroundImage: '/assets/images/services/image7.jpeg',
    iconColor: 'purple',
  },
  {
    title: 'Supplier Compliance Assessment (SCA)',
    description:
      'Conducts comprehensive factory compliance audits to ensure adherence to customer or brand-specific protocols.',
    icon: FiClipboard,
    backgroundImage: '/assets/images/services/image10.jpeg',
    iconColor: 'orange',
  },
  {
    title: 'Factory Training & Monitoring',
    description:
      'Providing customized training and monitoring to factories, helping them overcome technical, quality, and compliance shortcomings with a focus on prevention and solutions.',
    icon: FiBookOpen,
    backgroundImage: '/assets/images/services/image11.jpeg',
    iconColor: 'green',
  },
];

export function AuditServicesSection() {
  const theme = useTheme();

  return (
    <Container sx={{ py: { xs: 10, md: 15 } }}>
      <Grid container spacing={4} justifyContent="center">
        {AUDIT_SERVICES.map((service, index) => (
          <Grid key={index} xs={12} sm={6}>
            <m.div
              whileHover={{ y: -10, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `url(${CONFIG.site.basePath}/assets/background/overlay1.svg), url(${service.backgroundImage})`, // Dark overlay for better contrast
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white', // Text color set to white for better contrast
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow for depth
                }}
              >
                <Box
                  component={service.icon}
                  sx={{
                    fontSize: 48,
                    color: service.iconColor, // Icon color as per service
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    color: 'white', // Title in white
                    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)', // Adds text shadow for legibility
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.85)', // Light white for better readability
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)', // Shadow for better readability
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
