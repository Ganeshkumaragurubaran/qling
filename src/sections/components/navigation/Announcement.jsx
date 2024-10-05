import Link from 'next/link';
import { FiX } from 'react-icons/fi';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Announcement = () => {
  const [dismissed, setDismissed] = useState(false);
  return (
    <div className="overflow-hidden">
      <AnimatePresence>
        {dismissed || (
          <motion.div
            className="relative"
            exit={{
              height: '-0px',
            }}
          >
            <Link
              href="/"
              target="_blank"
              className="flex flex-col items-center justify-center gap-1 mx-auto mb-3 text-sm text-white w-fit hover:underline sm:flex-row"
            >
              <span className="font-semibold">🎉 Announcement 🎉</span>
              <span className="hidden sm:block">–</span>
              <span> A thing is happening you should know about</span>
            </Link>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="absolute text-white -translate-y-1/2 right-4 top-1/2"
            >
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
