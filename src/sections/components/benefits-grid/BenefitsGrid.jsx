import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { HighlighBlocks } from "./HighlighBlocks";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";

export const BenefitsGrid = () => (
    <LazyMotion features={domAnimation}>
      <m.section
        transition={{
          staggerChildren: 0.1,
        }}
        initial="initial"
        whileInView="whileInView"
        className="relative grid max-w-6xl grid-cols-3 gap-4 px-2 mx-auto md:px-4"
      >
        <div className="col-span-3">
          <SectionHeading>Why Choose Us?</SectionHeading>
          <SectionSubheading>
            Discover the key benefits that set us apart in delivering quality
            inspection and audit services.
          </SectionSubheading>
        </div>
        {/* <IntegrationsBlock />
        <CollaborateBlock /> */}
        <HighlighBlocks />
      </m.section>
    </LazyMotion>
  );
