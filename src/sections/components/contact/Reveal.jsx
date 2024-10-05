import { useRef, useEffect } from 'react';
import { m, useInView, LazyMotion, domAnimation, useAnimation } from 'framer-motion';

export const Reveal = ({ children, width = 'w-fit' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <LazyMotion features={domAnimation}>
      <div ref={ref} className={`relative overflow-hidden ${width}`}>
        {/* Main content animation */}
        <m.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
        >
          {children}
        </m.div>

        {/* Sliding overlay animation */}
        <m.div
          variants={{
            hidden: { left: 0 },
            visible: { left: '100%' },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute left-0 right-0 z-20 bg-indigo-500 bottom-1 top-1"
        />
      </div>
    </LazyMotion>
  );
};

export default Reveal;
