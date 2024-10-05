import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  FiEye, // Represents inspection services throughout production stages
  FiUsers, // Represents qualified and trained QA/QC team
  FiTruck, // Represents container loading supervision
  FiMapPin, // Represents wide network across the country
  FiShield, // Represents supplier quality assessment and compliance
  FiPackage, // Represents experience and established processes
  FiSettings, // Represents customized inspection protocols
  FiClipboard, // Represents comprehensive factory evaluation
  FiCheckCircle, // Represents internationally accepted procedures
} from 'react-icons/fi';

import { Block } from './Block';
import { CardTitle } from './CardTitle';
import { CardSubtitle } from './CardSubtitle';

export const HighlighBlocks = () => (
  <>
    <HighlightBlock
      Icon={FiPackage}
      iconClassName="text-orange-500"
      title="Over 2 Decades of Experience"
      subtitle="Q-LINGZ has more than 20 years of experience in quality inspection, ensuring the highest standards are always met."
    />
    <HighlightBlock
      Icon={FiUsers}
      iconClassName="text-green-500"
      title="Technically Qualified QA/QC Team"
      subtitle="Our team is composed of a large pool of technically qualified and trained QA/QC professionals."
    />
    <HighlightBlock
      Icon={FiMapPin}
      iconClassName="text-blue-500"
      title="Wide Network Across the Country"
      subtitle="We provide easy access through a wide network of offices across the country, ensuring fast and reliable services."
    />
    <HighlightBlock
      Icon={FiCheckCircle}
      iconClassName="text-pink-500"
      title="Internationally Accepted Procedures"
      subtitle="We follow internationally accepted sampling plans and inspection procedures tailored to meet client requirements."
    />
    <HighlightBlock
      Icon={FiSettings}
      iconClassName="text-zinc-500"
      title="Customized Inspection Protocols"
      subtitle="Our inspection procedures are highly adaptable and can be customized as per the client’s specific inspection protocols."
    />
    <HighlightBlock
      Icon={FiClipboard}
      iconClassName="text-purple-500"
      title="Comprehensive Factory Evaluation"
      subtitle="We provide Factory Evaluation services to assess the quality, procedures, and systems of each facility."
    />
    <HighlightBlock
      Icon={FiEye}
      iconClassName="text-yellow-500"
      title="Pre-Production to Final Inspection"
      subtitle="From Pre-Production, During Production to Pre-Shipment Inspection, we cover all stages to ensure product quality."
    />
    <HighlightBlock
      Icon={FiTruck}
      iconClassName="text-fuchsia-500"
      title="Container Loading Supervision"
      subtitle="Supervision of cargo during container loading ensures product quality, quantity, and proper packing conditions."
    />
    <HighlightBlock
      Icon={FiShield}
      iconClassName="text-red-500"
      title="Supplier Audits and Compliance"
      subtitle="Our Supplier Quality and Compliance Assessments thoroughly evaluate factories to ensure they meet required standards."
    />
  </>
);

const HighlightBlock = ({ iconClassName, Icon, title, subtitle }) => (
  <Block className="col-span-3 space-y-1.5 md:col-span-1">
    <Icon className={twMerge('text-3xl text-indigo-600', iconClassName)} />
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </Block>
);
