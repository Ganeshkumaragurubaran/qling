'use client';

import { AboutHero } from '../service-hero';
import { OurCustomers } from '../our-customers';
import { AboutCapabilities } from '../service-what';
import { ThirdPartyInspection } from '../third-party';
// ----------------------------------------------------------------------

export function AboutView() {
  return (
    <>
      <AboutHero />

      <AboutCapabilities />

      <OurCustomers />

      <ThirdPartyInspection />
    </>
  );
}
