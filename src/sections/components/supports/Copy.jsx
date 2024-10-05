import React from "react";

import { OPTIONS } from "./options";
import { CheckPill } from "./CheckPill";

export const Copy = ({ selected, setSelected }) => (
    <div className="w-full">
      <span className="mb-1.5 block text-center text-indigo-600 md:text-start">
        Tailored Solutions for Every Business
      </span>
      <h2 className="mb-3 text-4xl font-bold leading-tight text-center md:text-start md:text-5xl md:leading-tight">
        Ensuring Quality and Compliance for Global Supply Chains
      </h2>
      <p className="mb-6 text-base leading-relaxed text-center md:text-start md:text-lg md:leading-relaxed">
        Our services cater to businesses of all sizes, ensuring that your
        products meet the highest quality standards, comply with local and
        international regulations, and adhere to ethical sourcing practices.
        Whether you’re a large corporation or a growing small business, we help
        mitigate risks and maintain your brand reputation through our
        comprehensive inspection, audit, and assessment services.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-6 md:justify-start">
        {OPTIONS.map((o, i) => (
            <CheckPill
              key={o.title}
              index={i}
              selected={i === selected}
              setSelected={setSelected}
            >
              {o.title}
            </CheckPill>
          ))}
      </div>
    </div>
  );
