import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function AboutVision() {
  const theme = useTheme();

  const renderImg = (
    <Image
      src={`${CONFIG.site.basePath}/assets/images/services/hero.jpg`}
      alt="about-vision"
      ratio={{ xs: '4/3', sm: '16/9' }}
      slotProps={{
        overlay: { background: varAlpha(theme.vars.palette.grey['900Channel'], 0.48) },
      }}
    />
  );

  return (
    <Box
      sx={{
        pb: 10,
        position: 'relative',
        bgcolor: 'background.neutral',
        '&::before': {
          top: 0,
          left: 0,
          width: 1,
          content: "''",
          position: 'absolute',
          height: { xs: 80, md: 120 },
          bgcolor: 'background.default',
        },
      }}
    >
      <Container component={MotionViewport}>
        <Box
          sx={{
            mb: 10,
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderImg}

          {/* <Fab sx={{ position: 'absolute', zIndex: 9 }}>
            <Iconify icon="solar:play-broken" width={24} />
          </Fab> */}
        </Box>

        <m.div variants={varFade().inUp}>
          <Typography variant="h3" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            Our vision is to be the world&apos;s most trusted partner for Quality Assurance and
            supply chain management.
          </Typography>
        </m.div>
      </Container>
    </Box>
  );
}
