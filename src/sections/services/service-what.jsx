import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const COUNTRIES = [
  { name: 'India', icon: 'emojione:flag-for-india' },
  { name: 'Bangladesh', icon: 'emojione:flag-for-bangladesh' },
  { name: 'Indonesia', icon: 'emojione:flag-for-indonesia' },
  { name: 'Thailand', icon: 'emojione:flag-for-thailand' },
  { name: 'Vietnam', icon: 'emojione:flag-for-vietnam' },
  { name: 'Turkey', icon: 'emojione:flag-for-turkey' },
  { name: 'Mexico', icon: 'emojione:flag-for-mexico' },
  { name: 'Pakistan', icon: 'emojione:flag-for-pakistan' },
  { name: 'Sri Lanka', icon: 'emojione:flag-for-sri-lanka' },
];

// ----------------------------------------------------------------------

export function AboutCapabilities() {
  const theme = useTheme();

  return (
    <Container
      component={MotionViewport}
      sx={{ py: { xs: 10, md: 15 }, textAlign: { xs: 'center', md: 'unset' } }}
    >
      <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
        <Grid
          container
          xs={12}
          md={6}
          lg={7}
          alignItems="center"
          sx={{
            pr: { md: 7 },
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Grid xs={6}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="Our Capabilities"
                src={`${CONFIG.site.basePath}/assets/images/services/ins.jpg`}
                ratio="1/1"
                sx={{
                  borderRadius: 3,
                  boxShadow: `-40px 40px 80px ${varAlpha(
                    theme.vars.palette.grey['500Channel'],
                    0.24
                  )}`,
                  [stylesMode.dark]: {
                    boxShadow: `-40px 40px 80px ${varAlpha(
                      theme.vars.palette.common.blackChannel,
                      0.24
                    )}`,
                  },
                }}
              />
            </m.div>
          </Grid>

          <Grid xs={6}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="Our Office"
                src={`${CONFIG.site.basePath}/assets/images/services/aud.jpg`}
                ratio="3/4"
                sx={{
                  borderRadius: 3,
                  boxShadow: `-40px 40px 80px ${varAlpha(
                    theme.vars.palette.grey['500Channel'],
                    0.24
                  )}`,
                  [stylesMode.dark]: {
                    boxShadow: `-40px 40px 80px ${varAlpha(
                      theme.vars.palette.common.blackChannel,
                      0.24
                    )}`,
                  },
                }}
              />
            </m.div>
          </Grid>
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              About Us and Our Capabilities
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{ color: 'text.secondary', [stylesMode.dark]: { color: 'common.white' } }}
            >
              QLINGZ is an independent Quality Inspection & Factory Compliance Audit Services
              Company for Textiles, Consumer Goods, and other industries. We provide services across
              key manufacturing locations, including but not limited to:
            </Typography>
          </m.div>

          <Grid container spacing={3} sx={{ mt: 5, justifyContent: { xs: 'center', md: 'unset' } }}>
            {COUNTRIES.map((country) => (
              <Grid key={country.name} xs={6} sm={4} md={3} sx={{ textAlign: 'center' }}>
                <m.div variants={varFade().inUp}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      mx: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 36,
                      borderRadius: '50%',
                      boxShadow: `0 4px 10px ${varAlpha(theme.vars.palette.grey['900Channel'], 0.24)}`,
                      [stylesMode.dark]: {
                        boxShadow: `0 4px 10px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                      },
                    }}
                  >
                    <Iconify icon={country.icon} width={36} />
                  </Box>
                  <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                    {country.name}
                  </Typography>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
