import { useState } from 'react';
import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { MapPopup, MapMarker, MapControl } from 'src/components/map';

// Dynamic import of the Map component with a loading fallback
const Map = dynamic(() => import('src/components/map').then((mod) => mod.Map), {
  loading: () => (
    <Skeleton
      variant="rectangular"
      sx={{ top: 0, left: 0, width: 1, height: 1, position: 'absolute' }}
    />
  ),
});

export function ContactMap({ contacts }) {
  const theme = useTheme();
  const [popupInfo, setPopupInfo] = useState(null);
  const lightMode = theme.palette.mode === 'light';

  // Filter contacts to ensure they have valid latlng properties
  const validContacts = contacts?.filter(
    (country) => Array.isArray(country.latlng) && country.latlng.length >= 2
  ) || [];

  // Function to handle marker click with safe checks
  const handleMarkerClick = (event, country) => {
    if (!country || !Array.isArray(country.latlng) || country.latlng.length < 2) return;
    event.originalEvent.stopPropagation();
    setPopupInfo(country);
  };

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
        initialViewState={{ latitude: 12, longitude: 42, zoom: 2 }}
        mapStyle={`mapbox://styles/mapbox/${lightMode ? 'light' : 'dark'}-v10`}
      >
        <MapControl hideGeolocate />

        {validContacts.map((country, index) => (
          <MapMarker
            key={`marker-${index}`}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
            onClick={(event) => handleMarkerClick(event, country)}
          />
        ))}

        {popupInfo && Array.isArray(popupInfo.latlng) && popupInfo.latlng.length >= 2 && (
          <MapPopup
            longitude={popupInfo.latlng[1]}
            latitude={popupInfo.latlng[0]}
            onClose={() => setPopupInfo(null)}
          >
            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
              Address
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

// Mock contact data for testing purposes
export const _mapContact = [
  {
    latlng: [33, 65],
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '123-456-7890',
  },
  {
    latlng: [-12.5, 18.5],
    address: '508 Bridle Avenue Newnan, GA 30263',
    phoneNumber: '098-765-4321',
  },
];
