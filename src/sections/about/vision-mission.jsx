import React from 'react';
import { m } from 'framer-motion';

import { Box, Grid, Card, Container, Typography, CardContent } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// Data for Vision, Mission, Objective
const content = [
  {
    title: 'VISION',
    description: 'Our vision is to be your sourcing partner of choice.',
    icon: 'mdi:eye-outline',
  },
  {
    title: 'MISSION',
    description:
      'Our mission is to allow you to dedicate your time to focus on greater strategic objectives while we take care of your day-to-day operations.',
    icon: 'mdi:handshake-outline',
  },
  {
    title: 'OBJECTIVE',
    description:
      'Our highly talented team will do this by developing and executing an action plan that provides you with a bird’s eye view of the steps required and the current progress.',
    icon: 'mdi:note-outline',
  },
];

export const VisionMissionObjective = () => (
    <Container component={MotionViewport} sx={{ py: { xs: 5, md: 10 } }}>
      <Grid container spacing={4}>
        {content.map((item, index) => (
          <Grid item xs={12} md={4} key={item.title}>
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
