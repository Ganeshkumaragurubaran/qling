import React from "react";
import Link from "next/link";
import { SiX, SiYoutube, SiInstagram } from "react-icons/si";

import { LogoSmall } from "../navigation/Logo";
import { NAV_LINKS } from "../navigation/constants";

export const Footer = () => (
    <div className="bg-white">
      <footer className="relative max-w-6xl py-12 mx-auto overflow-hidden">
        <div className="md:px4 grid grid-cols-12 gap-x-1.5 gap-y-6 px-2">
          <LogoColumn />
          <GenericColumn title="Product" links={NAV_LINKS[0].sublinks} />
          <GenericColumn
            title="Company"
            links={[...NAV_LINKS[3].sublinks, ...NAV_LINKS[4].sublinks]}
          />
          <GenericColumn
            title="Legal"
            links={[
              {
                title: "Terms & Conditions",
                href: "/#",
              },
              {
                title: "Privacy Policy",
                href: "/#",
              },
              {
                title: "Refund Policy",
                href: "/#",
              },
            ]}
          />

          <GenericColumn
            title="Socials"
            links={[
              {
                title: "Twitter",
                href: "/#",
                Icon: SiX,
              },
              {
                title: "Instagram",
                href: "/#",
                Icon: SiInstagram,
              },
              {
                title: "Youtube",
                href: "/#",
                Icon: SiYoutube,
              },
            ]}
          />
        </div>
      </footer>
    </div>
  );

const LogoColumn = () => (
    <div className="col-span-6 md:col-span-4">
      <LogoSmall />
      <span className="inline-block mt-3 text-xs">
        © Pragan.dev - All rights reserved.
      </span>
    </div>
  );

const GenericColumn = ({ title, links }) => (
    <div className="col-span-6 space-y-2 text-sm md:col-span-2">
      <span className="block font-bold">{title}</span>
      {links.map((l) => (
        <Link
          key={l.title}
          href={l.href}
          className="flex items-center gap-1.5 transition-colors hover:text-indigo-600 hover:underline"
        >
          {l.Icon && <l.Icon />}
          {l.title}
        </Link>
      ))}
    </div>
  );
