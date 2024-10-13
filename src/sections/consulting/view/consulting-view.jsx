'use client';

import React from 'react';

import ConsultancyServices from '../consulting';
import { ConsultingHero } from '../consulting-hero';

export function ConsultingView() {
  return (
    <>
      <ConsultingHero />
      <ConsultancyServices />
    </>
  );
}
