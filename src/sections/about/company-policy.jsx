import React from 'react';
import { m } from 'framer-motion';

import { Grid, Card, Container, Typography, CardContent } from '@mui/material';

import { varFade, MotionViewport } from 'src/components/animate';

// Content Data
const content = [
  {
    title: 'Company History',
    description:
      'Founded in 2015, QLIngz is now one of the trusted quality partners in India. More than 2 decades of experience in quality inspection and auditing services.',
  },
  {
    title: 'Our Quality Policy',
    description:
      'Q-LINGZ is committed to provide a completely impartial, unbiased, and independent Quality Inspection, Audit, and Assessment services to its customers. We promote the quality culture in the entire supply chain and help manufacturers on continuous and sustainable methods of quality improvement. We hire and groom the best talent in the industry and practice the highest ethical standards in dealing with our customers, suppliers, stakeholders, and employees, while fulfilling the statutory and regulatory requirements.',
  },
];

export const CompanyHistoryAndQualityPolicy = () => (
    <Container component={MotionViewport} sx={{ py: { xs: 5, md: 10 } }}>
      <Grid container spacing={4}>
        {content.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <m.div
              whileHover={{ y: -10, boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              variants={varFade().inUp}
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
                  p: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <CardContent>
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
