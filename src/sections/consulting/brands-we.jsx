import React from 'react';

import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

// Styled container for the logos/icons
const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px', // Adjust icon size here
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
  color: theme.palette.primary.main, // Main color for the icons
}));

// Icon array for brands and textile industries using direct Iconify names
const brandIcons = [
  { icon: 'simple-icons:adidas', label: 'Adidas' },
  { icon: 'simple-icons:nike', label: 'Nike' },
  { icon: 'simple-icons:puma', label: 'Puma' },
  { icon: 'mdi:factory', label: 'Textile Factory' }, // Generic factory icon for textile industry
  { icon: 'game-icons:sewing-string', label: 'Sewing Industry' }, // Sewing machine for textile industry
  { icon: 'mdi:shoe-print', label: 'Footwear Industry' }, // Icon representing the footwear industry
  { icon: 'mdi:tshirt-crew', label: 'Apparel Industry' }, // T-shirt icon for apparel-related work
];
export default function BrandsWeWorkWith() {
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container>
        {/* Title */}
        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
          Brands We Work With
        </Typography>

        {/* Brand and Industry Icons Grid */}
        <Grid container spacing={4} justifyContent="center">
          {brandIcons.map((brand, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <IconContainer>
                <Iconify icon={brand.icon} width={48} height={48} />
              </IconContainer>
              <Typography variant="subtitle2" align="center" sx={{ mt: 1 }}>
                {brand.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
