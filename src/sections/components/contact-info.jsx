import React from 'react';
import { m } from 'framer-motion';

import { Box, Link, Stack, Divider, Container, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// Contact information details
const contactDetails = [
  {
    label: 'Mr. Venkat Raman',
    description: 'Chief Executive Officer',
    icon: 'mdi:account-tie-outline',
  },
  {
    label: 'Email',
    description: 'info@qlingz.com',
    icon: 'mdi:email-outline',
    link: 'mailto:info@qlingz.com',
  },
  {
    label: 'Alternate Email',
    description: 'infoqlingz@gmail.com',
    icon: 'mdi:email-outline',
    link: 'mailto:infoqlingz@gmail.com',
  },
  {
    label: 'Phone',
    description: '+91-95009 10535',
    icon: 'mdi:phone-outline',
    link: 'tel:+919500910535',
  },
  {
    label: 'WhatsApp',
    description: '+91-95009 10535',
    icon: 'mdi:whatsapp',
    link: 'https://wa.me/919500910535',
  },
];

export const ContactInformation = () => (
    <Container component={MotionViewport}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3" align="center" sx={{ mb: { xs: 5, md: 8 } }}>
          Our Contact Information
        </Typography>
      </m.div>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: 600,
          mx: 'auto',
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Stack spacing={4} sx={{ width: 1 }}>
          {contactDetails.map((detail, index) => (
            <m.div key={index} variants={varFade().inUp}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.light',
                    borderRadius: '50%',
                  }}
                >
                  <Iconify icon={detail.icon} width={30} sx={{ color: 'primary.main' }} />
                </Box>
                <Box>
                  <Typography variant="h6">{detail.label}</Typography>
                  {detail.link ? (
                    <Link href={detail.link} underline="hover" color="text.primary">
                      <Typography variant="body2" color="text.secondary">
                        {detail.description}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      {detail.description}
                    </Typography>
                  )}
                </Box>
              </Stack>
              {index < contactDetails.length - 1 && (
                <Divider sx={{ my: 2 }} variant="middle" />
              )}
            </m.div>
          ))}
        </Stack>
      </Box>
    </Container>
  );
