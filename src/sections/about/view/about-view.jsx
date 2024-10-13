'use client';

import { AboutHero } from '../about-hero';
import { AboutVision } from '../about-vision';
import { VisionMissionObjective } from '../vision-mission';
import { CompanyHistoryAndQualityPolicy } from '../company-policy';
// ----------------------------------------------------------------------

export function AboutView() {
  return (
    <>
      <AboutHero />

      <VisionMissionObjective />
      <CompanyHistoryAndQualityPolicy />

      {/* <AboutWhat /> */}

      <AboutVision />

      {/* <AboutTestimonials /> */}
    </>
  );
}
