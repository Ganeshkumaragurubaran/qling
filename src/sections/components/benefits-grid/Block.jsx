import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Block = ({ className, ...rest }) => (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when the component is 20% in view
      transition={{ duration: 0.5, ease: "easeInOut" }} // Adjust transition if needed
      variants={{
        initial: {
          y: 6,
          boxShadow: "0px 0px 0px rgb(24, 24, 27)",
        },
        whileInView: {
          y: 0,
          boxShadow: "0px 6px 0px rgb(24, 24, 27)",
        },
      }}
      className={twMerge(
        "col-span-1 rounded-lg border-2 border-zinc-900 bg-white p-6",
        className
      )}
      {...rest}
    />
  );
