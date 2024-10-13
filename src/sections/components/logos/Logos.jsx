import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import {
  FaEye,
  FaTools,
  FaIndustry,
  FaShieldAlt,
  FaChartLine,
  FaLightbulb,
  FaUserShield,
  FaCheckCircle,
  FaClipboardCheck,
  FaExclamationTriangle,
} from 'react-icons/fa';

export const Logos = () => (
    <section className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="absolute top-0 bottom-0 left-0 z-10 w-32 pointer-events-none bg-gradient-to-r from-white to-white/0" />
      <div className="absolute top-0 bottom-0 right-0 z-10 w-32 pointer-events-none bg-gradient-to-l from-white to-white/0" />
    </section>
  );

const TranslateWrapper = ({ children, reverse }) => (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ translateX: reverse ? '-100%' : '0%' }}
        animate={{ translateX: reverse ? '0%' : '-100%' }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="flex px-2"
      >
        {children}
      </m.div>
    </LazyMotion>
  );

const LogoItem = ({ Icon, name }) => (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <Icon className="text-2xl text-indigo-600 md:text-3xl" />
      <span className="text-xl font-semibold uppercase whitespace-nowrap md:text-2xl">{name}</span>
    </span>
  );

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={FaCheckCircle} name="Quality Inspection" />
    <LogoItem Icon={FaIndustry} name="Factory Compliance" />
    <LogoItem Icon={FaShieldAlt} name="Safety Compliance" />
    <LogoItem Icon={FaEye} name="Customer Watch" />
    <LogoItem Icon={FaExclamationTriangle} name="Risk Detection" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={FaClipboardCheck} name="Audits" />
    <LogoItem Icon={FaTools} name="Solution Implementation" />
    <LogoItem Icon={FaChartLine} name="Continuous Improvement" />
    <LogoItem Icon={FaUserShield} name="Customer Protection" />
    <LogoItem Icon={FaLightbulb} name="Innovative Solutions" />
  </>
);
