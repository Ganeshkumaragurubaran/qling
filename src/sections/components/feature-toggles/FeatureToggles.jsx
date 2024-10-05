import React, { useState } from "react";

import { data } from "./data";
import { ToggleButton } from "./ToggleButton";
import { FeatureDisplay } from "./FeatureDisplay";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";

export const FeatureToggles = () => {
  const [selected, setSelected] = useState(1);

  const el = data.find((d) => d.id === selected);

  return (
    <section className="relative max-w-6xl px-2 mx-auto md:px-4">
      <SectionHeading>
        Explore Our Quality Inspection & Audit Services
      </SectionHeading>
      <SectionSubheading>
        We provide comprehensive inspection, auditing, and assessment services
        that help you ensure sustainable quality and compliance across your
        supply chain.
      </SectionSubheading>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-4 mb-9 sm:grid-cols-4">
          {data.map((d) => (
            <ToggleButton
              key={d.id}
              id={d.id}
              selected={selected}
              setSelected={setSelected}
            >
              {d.title}
            </ToggleButton>
          ))}
        </div>
        <div className="w-full translate-y-2 rounded-xl bg-zinc-900">
          <div className="w-full -translate-y-2 rounded-lg shadow-lg">
            <FeatureDisplay
              selected={selected}
              cardTitle={el.cardTitle}
              cardSubtitle={el.cardSubtitle}
              Component={el.Component}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
