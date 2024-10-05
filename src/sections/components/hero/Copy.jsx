import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { Button } from "../shared/Button";

export const Copy = () => (
    <>
      <div className="mb-4 rounded-full bg-zinc-600">
        <Link
          href="https://qlingz.com/"
          target="_blank"
          rel="nofollow"
          className="flex items-center p-1 text-sm transition-transform bg-white border rounded-full border-zinc-900 hover:-rotate-2"
        >
          <span className="rounded-full bg-[#FF6154] px-2 py-1 font-medium text-white">
            HEY!
          </span>
          <span className="ml-2">Welcome to QLINGZ</span>
          <FiArrowUpRight className="ml-auto mr-2" />
        </Link>
      </div>
      <h1 className="max-w-4xl text-3xl font-black leading-tight text-center text-white md:text-6xl">
        Bringing Quality, Safety, and Sustainability to Life
      </h1>
      <p className="max-w-2xl mx-auto my-4 text-base leading-relaxed text-center text-white md:my-6 md:text-2xl">
        At Qlingz, we are committed to exceeding your expectations with tailored
        quality assurance services for your supply chain, globally and 24/7.
      </p>
      <Button className="mt-4">
        <span className="font-bold">Get started - </span> no CC required
      </Button>
    </>
  );
