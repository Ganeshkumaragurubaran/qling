import React from 'react';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

export const DesktopLinks = ({ links, setHovered, hovered, activeSublinks }) => (
    <LazyMotion features={domAnimation}>
      <div className="ml-9 mt-0.5 hidden md:block">
        <div className="flex gap-6">
          {links.map((l) => (
            <TopLink key={l.title} setHovered={setHovered} title={l.title}>
              {l.title}
            </TopLink>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          {hovered && (
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="py-6 space-y-4"
            >
              {activeSublinks.map((l) => (
                <a
                  className="block text-2xl font-semibold transition-colors text-zinc-950 hover:text-indigo-600"
                  href={l.href}
                  key={l.title}
                >
                  {l.title}
                </a>
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );


const TopLink = ({ children, setHovered, title }) => (
  <span
    onMouseEnter={() => setHovered(title)}
    className="cursor-pointer text-zinc-950"
  >
    {children}
  </span>
);
