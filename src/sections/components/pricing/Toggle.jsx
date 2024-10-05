import React from 'react';
import { motion } from 'framer-motion';

export const Toggle = ({ selected, setSelected }) => (
  <div className="relative flex items-center mx-auto mt-3 rounded-full w-fit bg-zinc-200">
    <button
      type="button"
      className="relative z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium"
      onClick={() => {
        setSelected('monthly');
      }}
    >
      <span className="relative z-10">Monthly</span>
    </button>
    <button
      type="button"
      className="relative z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium"
      onClick={() => {
        setSelected('annual');
      }}
    >
      <span className="relative z-10">Annually</span>
    </button>
    <div
      className={`absolute inset-0 z-0 flex ${
        selected === 'annual' ? 'justify-end' : 'justify-start'
      }`}
    >
      <motion.span
        layout
        transition={{ ease: 'easeInOut' }}
        className="w-1/2 h-full bg-white border rounded-full border-zinc-900"
      />
    </div>
  </div>
);
