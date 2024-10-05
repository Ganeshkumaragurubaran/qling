import React from "react";
import {
  FiGlobe,
  FiArchive,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

import { Block } from "./Block";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const IntegrationsBlock = () => (
  <Block className="col-span-3 overflow-hidden md:col-span-2">
    <CardTitle>Comprehensive Coverage Across Industries</CardTitle>
    <CardSubtitle>
      Our services are designed to integrate with various industries and
      businesses, ensuring compliance and high-quality standards across the
      supply chain.
    </CardSubtitle>

    <div className="relative grid grid-cols-3 mt-6 -mx-6 -mb-6 border-t-2 rounded-t-none place-content-center border-zinc-900">
      <div className="grid w-full py-8 text-white bg-blue-500 border-r-2 place-content-center border-zinc-900">
        <FiGlobe className="text-4xl" />
        <span>Global Expertise</span>
      </div>
      <div className="grid w-full py-8 text-white bg-green-500 border-r-2 place-content-center border-zinc-900">
        <FiCheckCircle className="text-4xl" />
        <span>Certified Audits</span>
      </div>
      <div className="grid w-full py-8 text-white bg-red-500 place-content-center">
        <FiAlertCircle className="text-4xl" />
        <span>Risk Mitigation</span>
      </div>

      <div className="grid w-full py-8 text-white bg-yellow-500 border-t-2 border-r-2 place-content-center border-zinc-900">
        <FiArchive className="text-4xl" />
        <span>Document Management</span>
      </div>
      <div className="grid w-full py-8 bg-white border-t-2 place-content-center border-zinc-900 text-zinc-900">
        + More Industry Solutions
      </div>
    </div>
  </Block>
);
