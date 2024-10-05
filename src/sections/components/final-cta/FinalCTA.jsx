import React from "react";

import { Button } from "../shared/Button";
import { LogoLarge } from "../navigation/Logo";
import { SectionHeading } from "../shared/SectionHeading";

export const FinalCTA = () => (
    <section className="px-2 py-24 -mt-8 bg-white md:px-4">
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        <LogoLarge />
        <SectionHeading>Ready to elevate your experience?</SectionHeading>
        <p className="mx-auto mb-8 text-base leading-relaxed text-center md:text-xl md:leading-relaxed">
          Take the next step in optimizing your quality control processes. Get
          in touch with us and explore how our services can help you ensure
          excellence in every product.
        </p>
        <Button intent="primary">
          <span className="font-bold">Get started - </span> no CC required
        </Button>
      </div>
    </section>
  );
