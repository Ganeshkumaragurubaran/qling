import React from "react";
import { AnimatePresence } from "framer-motion";

import { OPTIONS } from "./options";

export const Users = ({ selected }) => {
  const { Content } = OPTIONS[selected];

  return (
    <div className="w-full translate-y-2 rounded-lg bg-zinc-900">
      <AnimatePresence mode="wait">
        <Content key={selected} />
      </AnimatePresence>
    </div>
  );
};
