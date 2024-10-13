import React, { useState } from 'react';
import useMeasure from 'react-use-measure';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { m, LazyMotion, domAnimation } from 'framer-motion';

import { Post } from './Post';
import { posts, CARD_SIZE, BREAKPOINTS } from './data';

export const BlogCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((prev) => prev + CARD_SIZE); // Calculate and return the new value
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((prev) => prev - CARD_SIZE); // Calculate and return the new value
  };

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref}>
        <div className="relative px-2 overflow-hidden md:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-medium leading-tight text-center md:text-start md:text-4xl md:leading-tight">
                More from us
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className={`rounded-md border border-zinc-900 bg-white p-1.5 text-2xl transition-all ${
                    CAN_SHIFT_LEFT ? 'hover:bg-zinc-200' : 'opacity-30'
                  }`}
                  disabled={!CAN_SHIFT_LEFT}
                  onClick={shiftLeft}
                >
                  <FiArrowLeft />
                </button>
                <button
                  type="button"
                  className={`rounded-md border border-zinc-900 bg-white p-1.5 text-2xl transition-all ${
                    CAN_SHIFT_RIGHT ? 'hover:bg-zinc-200' : 'opacity-30'
                  }`}
                  disabled={!CAN_SHIFT_RIGHT}
                  onClick={shiftRight}
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>
            <m.div animate={{ x: offset }} transition={{ ease: 'easeInOut' }} className="flex">
              {posts.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};
