import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { varAlpha, stylesMode } from 'src/theme/styles';

import { Image } from 'src/components/image';
import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export const SKILLS = [...Array(3)].map((_, index) => ({
  label: ['Development', 'Design', 'Marketing'][index],
  value: [80, 90, 95][index],
}));

// ----------------------------------------------------------------------

export function AboutWhat() {
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
                alt="Our office small"
                src={`${CONFIG.site.basePath}/assets/images/services/about.jpg`}
                ratio="1/1"
                sx={{
                  borderRadius: 3,
                  boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                  [stylesMode.dark]: {
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                  },
                }}
              />
            </m.div>
          </Grid>

          <Grid xs={6}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="Our office large"
                src={`${CONFIG.site.basePath}/assets/images/services/sup.jpg`}
                ratio="3/4"
                sx={{
                  borderRadius: 3,
                  boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.24)}`,
                  [stylesMode.dark]: {
                    boxShadow: `-40px 40px 80px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
                  },
                }}
              />
            </m.div>
          </Grid>
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              What We Do at QLINGZ
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{ color: 'text.secondary', [stylesMode.dark]: { color: 'common.white' } }}
            >
              At QLINGZ, we offer Third Party Inspections, Quality Assurance services, and Business
              Consultancy. Our services are designed to meet the needs of your entire supply chain,
              ensuring quality, safety, and sustainability throughout the production process.
              <br />
              <br />
              From Pre-Production to Final Inspection, and from Supplier Assessments to Container
              Loading Supervision, QLINGZ brings accuracy and reliability to every step. We exceed
              our customers&apos; expectations with innovative and quality products, globally, 24/7.
            </Typography>
          </m.div>

          {/* <Stack spacing={3} sx={{ my: 5 }}>
            {SKILLS.map((progress, index) => (
              <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    {progress.label}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fPercent(progress.value)}
                  </Typography>
                </Stack>

                <LinearProgress
                  color={(index === 0 && 'primary') || (index === 1 && 'warning') || 'error'}
                  variant="determinate"
                  value={progress.value}
                />
              </Box>
            ))}
          </Stack> */}

          <m.div variants={varFade().inRight}>
            <Button
              sx={{ my: 2 }}
              variant="outlined"
              color="inherit"
              size="large"
              component={RouterLink}
              href={paths.services}
              endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
            >
              Our Services
            </Button>
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}
