import React from "react";
import { twMerge } from "tailwind-merge";
import { FiUsers, FiPackage } from "react-icons/fi";

import { Block } from "./Block";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const CollaborateBlock = () => (
  <Block className="col-span-3 overflow-hidden md:col-span-1">
    <div className="flex flex-col justify-between h-full gap-6">
      <div className="relative grid h-full -mx-6 -mt-6 overflow-hidden border-b-2 shadow-inner place-content-center border-zinc-900 bg-zinc-100 shadow-zinc-500">
        <div className="p-4 my-6 bg-white border-2 rounded-lg shadow border-zinc-900 shadow-zinc-500">
          <FiUsers className="text-4xl" />
        </div>

        <Collaborator nameText="Global Partners" />
        <Collaborator
          nameText="Regional Experts"
          wrapperClassName="top-[10%] left-[10%]"
          cursorClassName="text-blue-500"
          nameClassName="border-blue-900 bg-blue-200 text-blue-900"
        />
        <Collaborator
          nameText="Compliance Officers"
          wrapperClassName="top-[20%] left-[75%]"
          cursorClassName="text-green-500"
          nameClassName="border-green-900 bg-green-200 text-green-900"
        />
        <Collaborator
          nameText="Inspection Teams"
          wrapperClassName="top-[70%] left-[5%]"
          cursorClassName="text-orange-500"
          nameClassName="border-orange-900 bg-orange-200 text-orange-900"
        />
      </div>
      <div>
        <CardTitle>Seamless Collaboration</CardTitle>
        <CardSubtitle>
          We work closely with your teams and partners to ensure compliance and
          successful audits.
        </CardSubtitle>
      </div>
    </div>
  </Block>
);

const Collaborator = ({
  wrapperClassName,
  cursorClassName,
  nameClassName,
  nameText,
}) => (
    <div className={twMerge("absolute left-[60%] top-[60%]", wrapperClassName)}>
      <FiPackage
        className={twMerge("text-4xl text-pink-500", cursorClassName)}
      />
      <span
        className={twMerge(
          "block translate-x-1/2 whitespace-nowrap rounded border border-pink-900 bg-pink-200 px-1.5 py-0.5 text-xs text-pink-900",
          nameClassName
        )}
      >
        {nameText}
      </span>
    </div>
  );
