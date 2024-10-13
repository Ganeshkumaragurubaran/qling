import { useState } from 'react';
import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { MapPopup, MapMarker, MapControl } from 'src/components/map';

// Dynamic import for the Map component with a loading fallback
const Map = dynamic(() => import('src/components/map').then((mod) => mod.Map), {
  loading: () => (
    <Skeleton
      variant="rectangular"
      sx={{ top: 0, left: 0, width: 1, height: 1, position: 'absolute' }}
    />
  ),
});

// List of contact data (coordinates for countries) for rendering markers
export const _mapContact = [
  {
    latlng: [20.5937, 78.9629], // India
    address: 'India',
    phoneNumber: '+91-123-456-7890',
  },
  {
    latlng: [23.685, 90.3563], // Bangladesh
    address: 'Bangladesh',
    phoneNumber: '+880-123-456-7890',
  },
  {
    latlng: [35.8617, 104.1954], // China
    address: 'China',
    phoneNumber: '+86-123-456-7890',
  },
  {
    latlng: [22.3193, 114.1694], // Hong Kong
    address: 'Hong Kong',
    phoneNumber: '+852-123-456-7890',
  },
  {
    latlng: [-30.5595, 22.9375], // South Africa
    address: 'South Africa',
    phoneNumber: '+27-123-456-7890',
  },
  {
    latlng: [46.6034, 1.8883], // France
    address: 'France',
    phoneNumber: '+33-123-456-7890',
  },
  {
    latlng: [55.3781, -3.436], // UK
    address: 'United Kingdom',
    phoneNumber: '+44-123-456-7890',
  },
];

// Main component rendering the world map with the specified locations
export function WorldMapWithOffices() {
  const theme = useTheme();

  const [popupInfo, setPopupInfo] = useState(null);

  const lightMode = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        zIndex: 0,
        borderRadius: 1.5,
        overflow: 'hidden',
        position: 'relative',
        height: { xs: 320, md: 560 },
      }}
    >
      <Map
        initialViewState={{ latitude: 11.1, longitude: 77.1, zoom: 1 }} // Centered on the world
        mapStyle={`mapbox://styles/mapbox/${lightMode ? 'light' : 'dark'}-v10`}
      >
        <MapControl hideGeolocate />

        {/* Markers for each country */}
        {_mapContact.map((country, index) => (
          <MapMarker
            key={`marker-${index}`}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
            onClick={(event) => {
              event.originalEvent.stopPropagation();
              setPopupInfo(country);
            }}
          />
        ))}

        {/* Popup for showing the contact information */}
        {popupInfo && (
          <MapPopup
            longitude={popupInfo.latlng[1]}
            latitude={popupInfo.latlng[0]}
            onClose={() => setPopupInfo(null)}
          >
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              {popupInfo.address}
            </Typography>

            <Typography component="div" variant="caption">
              {popupInfo.address}
            </Typography>

            <Typography
              component="div"
              variant="caption"
              sx={{ mt: 1, display: 'flex', alignItems: 'center' }}
            >
              <Iconify icon="solar:phone-bold" width={14} sx={{ mr: 0.5 }} />
              {popupInfo.phoneNumber}
            </Typography>
          </MapPopup>
        )}
      </Map>
    </Box>
  );
}
