'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

import { Box, Container } from '@mui/material';

import { AboutWhat } from 'src/sections/about/about-what';
import { ContactForm } from 'src/sections/contact/contact-form';
import { ProductsSection } from 'src/sections/our-products/product-sections';

import { font } from '../fonts';
import { OurValues } from '../our-values';
import { NewHero } from '../hero/new-hero';
import { Supports } from '../supports/Supports';
import { ContactInformation } from '../contact-info';
import { BenefitsGrid } from '../benefits-grid/BenefitsGrid';
import { FeatureToggles } from '../feature-toggles/FeatureToggles';

export default function NewHome() {
  return (
    <LazyMotion features={domAnimation}>
      <main className={`${font.className} overflow-hidden`}>
        <NewHero />
        <AboutWhat />
        <div className="pt-12 pb-24 space-y-36 bg-zinc-50 md:pt-16">
          <FeatureToggles />
        </div>
        <div className="bg-zinc-50">
          <ProductsSection />
          <OurValues />
        </div>
        <div className="pt-12 pb-24 space-y-36 bg-zinc-50 md:pt-16">
          {/* <Stats /> */}

          <Supports />
          <BenefitsGrid />
          {/* <Pricing /> */}
          {/* <BlogCarousel /> */}
        </div>
        {/* <EmailCapture /> */}
        {/* <Contact /> */}
        <Container sx={{ py: 10 }}>
          <Box
            gap={10}
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            <ContactForm />
            <ContactInformation />
          </Box>
        </Container>
      </main>
    </LazyMotion>
  );
}
