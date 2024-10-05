import React from "react";

import { Copy } from "./Copy";

export const Hero = () => (
    <section
      className="relative flex flex-col items-center justify-center px-6 pt-12 pb-48 bg-center bg-cover md:px-12 md:pt-24"
      style={{
        backgroundImage: "url('/Textile-Auditing.jpg')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/40" /> {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center">
        {" "}
        <Copy />
        {/* <MockupScreen /> */}
      </div>
    </section>
  );
