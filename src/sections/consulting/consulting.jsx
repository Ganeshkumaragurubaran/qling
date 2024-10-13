import React from 'react';

import Container from '@mui/material/Container';
import { Box, Grid, Card, Typography, CardContent } from '@mui/material';

import { Iconify } from 'src/components/iconify'; // Ensure this import is correct
import { styled } from '@mui/material/styles';

// Styled component to add background, padding, and spacing
const RootStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  backgroundColor: theme.palette.background.default,
}));

// Styled icon container to ensure icon is centered
const IconContainer = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.common.white,
}));

export default function ConsultancyServices() {
  return (
    <RootStyle>
      <Container>
        {/* Title Section */}
        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
          CONSULTANCY & BRAND DEVELOPMENT SERVICES
        </Typography>

        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          Qlingz has evolved from a Sourcing Firm to a full-scale Consulting Company providing
          meaningful and results-oriented consultancy for several major clients around the world. In
          an ever-changing world, while global business dynamics & trends are shifting, Qlingz
          Consulting provides a helping hand and a resource skillset designed to tackle these issues
          coupled with a vast array of level of experience of our CEO and global partners.
        </Typography>

        {/* Services Section */}
        <Grid container spacing={4} justifyContent="center">
          {/* Local/Global Representation */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <IconContainer>
                  <Iconify width={32} icon="mdi:earth" />
                </IconContainer>
                <Typography variant="h6" gutterBottom>
                  Local/Global Representation
                </Typography>
                <Typography variant="body2">
                  Representation of foreign companies locally and globally for better market
                  penetration.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Business Opportunities */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <IconContainer>
                  <Iconify width={32} icon="mdi:trending-up" />
                </IconContainer>
                <Typography variant="h6" gutterBottom>
                  Business Opportunities
                </Typography>
                <Typography variant="body2">
                  Identify and facilitate business opportunities for investors in Bangladesh and
                  South Africa.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Mergers & Acquisitions */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <IconContainer>
                  <Iconify width={32} icon="mdi:handshake" />
                </IconContainer>
                <Typography variant="h6" gutterBottom>
                  Mergers & Acquisitions
                </Typography>
                <Typography variant="body2">
                  Provide expert services in mergers, acquisitions, and joint ventures on a global
                  scale.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Brand Development */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <IconContainer>
                  <Iconify width={32} icon="mdi:account-group" />
                </IconContainer>
                <Typography variant="h6" gutterBottom>
                  Brand Development
                </Typography>
                <Typography variant="body2">
                  Comprehensive brand development and international marketing services to help
                  businesses grow globally.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
