import React from "react";
import { motion, AnimatePresence } from "framer-motion";


export const FeatureDisplay = ({
  selected,
  cardTitle,
  cardSubtitle,
  Component,
}) => (
    <div className="grid w-full grid-cols-1 overflow-hidden bg-white border-2 h-fit rounded-xl border-zinc-900 md:h-96 md:grid-cols-12">
      <div className="flex flex-col justify-between col-span-1 p-8 md:col-span-7 md:p-12">
        <div>
          <AnimatePresence mode="popLayout">
            <motion.div
              initial={{
                opacity: 0,
                y: -25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 25,
              }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
              key={selected}
            >
              <h3 className="mb-4 text-3xl font-bold">{cardTitle}</h3>
              <p className="max-w-lg mb-12 text-base leading-relaxed md:text-xl md:leading-relaxed">
                {cardSubtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      <div className="relative col-span-1 border-t-2 border-l-0 shadow-inner min-h-80 border-zinc-900 bg-zinc-100 shadow-zinc-500 md:col-span-5 md:border-l-2 md:border-t-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              x: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
            }}
            exit={{
              opacity: 0,
              y: 50,
              x: 50,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            key={selected}
            className="absolute bottom-0 right-0 overflow-hidden bg-white border-t-2 border-l-2 shadow-2xl pointer-events-none left-8 top-8 rounded-tl-2xl border-zinc-900"
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
