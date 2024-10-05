import React from "react";
import { AiFillBug } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import {
  FiEye,
  FiEdit,
  FiCheck,
  FiClock,
  FiAnchor,
  FiItalic,
  FiAlignLeft,
  FiArrowRight,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

const IssuesComponent = () => (
    <div className="w-full h-full p-4">
      <div className="mb-6 flex items-center gap-1.5 text-sm">
        <span className="text-zinc-600">Quality Control Team</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-red-900">
          <AiFillBug />
          <span>Inspection</span>
        </div>
      </div>
      <div className="-ml-1.5 mb-4 flex items-center gap-1.5">
        <img
          src="https://api.dicebear.com/8.x/notionists/svg"
          alt="avatar"
          className="ml-1.5 size-8 rounded bg-indigo-200 shadow-inner"
        />
        <div>
          <span className="block text-sm font-medium">Rajesh Kumar</span>
          <span className="block text-xs text-zinc-600">Senior Inspector</span>
        </div>
      </div>
      <div className="mb-1 text-xl font-medium line-clamp-1">
        Finished Goods Inspection Report - Factory A
      </div>
      <span className="text-sm leading-relaxed line-clamp-3 text-zinc-600">
        Our inspectors have completed the final product inspection for Factory
        A. All items meet the agreed quality standards, with some minor
        non-critical issues. Additional lab tests have been recommended.
      </span>
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-1.5 bg-white/50 p-4 backdrop-blur">
        <span className="flex w-fit items-center gap-1 rounded bg-yellow-100 px-1.5 py-0.5 text-sm text-yellow-900">
          <FiClock />
          <span>In Progress</span>
        </span>
        <span className="flex w-fit items-center gap-1 rounded bg-zinc-200 px-1.5 py-0.5 text-sm text-zinc-900">
          <FiArrowRight />
          <span>Medium Risk</span>
        </span>
      </div>
    </div>
  );

const KanbanComponent = () => (
    <div className="relative grid w-full h-full grid-cols-2 gap-2 p-4 pb-0 pr-0 min-w-96">
      <div className="relative z-0 w-full h-full p-4 rounded-t-xl bg-zinc-100">
        <div className="flex items-center justify-between">
          <span className="mb-1 flex w-fit items-center gap-1 rounded bg-blue-100 px-1.5 py-0.5 text-sm text-blue-900">
            <FiEye />
            <span>Ongoing Audits</span>
          </span>
          <FiChevronDown />
        </div>
        <div className="mt-4 space-y-2">
          <BGTask task="Social Compliance Audit - Factory B" />
          <BGTask task="Safety Protocols Check - Factory C" />
          <BGTask task="Production Capabilities Audit - Factory D" />
        </div>
      </div>
      <div className="relative z-0 w-full h-full p-4 rounded-t-xl bg-zinc-100">
        <div className="flex items-center justify-between">
          <span className="flex w-fit items-center gap-1 rounded bg-green-100 px-1.5 py-0.5 text-sm text-green-900">
            <FiCheck />
            <span>Completed Audits</span>
          </span>
          <FiChevronDown />
        </div>
        <div className="mt-4 space-y-2">
          <BGTask task="Technical Capabilities Audit - Factory A" />
        </div>
      </div>

      <OverlayTask />
    </div>
  );

const BGTask = () => (
    <div className="w-full rounded-lg bg-white p-4 text-[0.5rem] text-zinc-400 shadow blur-[1px] sm:text-xs">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  );

const OverlayTask = () => (
    <div className="absolute z-10 w-64 p-4 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-indigo-600 rounded-lg shadow-xl left-1/2 top-1/2 rotate-3 shadow-indigo-600/20">
      <div className="mb-2 flex items-center gap-1.5 text-xs">
        <span className="text-zinc-600">Audit Team</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-indigo-100 px-1.5 py-0.5 text-indigo-900">
          <FiAnchor />
          <span>Factory Audits</span>
        </div>
      </div>
      <span className="mb-0.5 block text-lg font-medium">
        Social Compliance Audit - Factory B
      </span>
      <span className="block text-sm text-zinc-600">December 4th, 2023</span>
    </div>
  );

const GanttComponent = () => (
    <div className="relative p-4">
      <span className="flex w-fit items-center gap-1 rounded bg-blue-100 px-1.5 py-0.5 text-sm text-blue-900">
        <FiEye />
        <span>Sustainability Assessment</span>
      </span>

      <p>
        We have completed a comprehensive sustainability assessment of your
        supply chain across various sourcing regions. Our report outlines key
        environmental and ethical compliance metrics, identifying areas for
        improvement.
      </p>
    </div>
  );

const DocumentationComponent = () => (
    <div className="relative p-4">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block p-2 rounded w-fit bg-zinc-200">
          <FiEye />
        </span>
        <span className="block p-2 rounded w-fit bg-zinc-200">
          <FiEdit />
        </span>
        <span className="block p-2 rounded w-fit bg-zinc-200">
          <FiAlignLeft />
        </span>
        <span className="block p-2 rounded w-fit bg-zinc-200">
          <FiItalic />
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block px-2 py-1 text-xs font-medium text-blue-900 bg-blue-100 rounded-full w-fit">
          John Smith
        </span>
        <span className="block px-2 py-1 text-xs font-medium text-green-900 bg-green-100 rounded-full w-fit">
          Beth Davis
        </span>
      </div>
      <span className="relative mb-1.5 inline-block text-lg font-medium">
        Additional Services
        <span className="inline-block text-green-600 scale-150 animate-pulse">
          |
        </span>
        <BsFillCursorFill className="inline-block text-3xl text-green-600 -rotate-90 translate-y-full" />
      </span>
      <br />
      <span className="relative text-xs text-zinc-600 sm:text-sm">
        In addition to inspections and audits, we offer lab test management,
        document verification, and production follow-up services to ensure your
        products meet the highest quality and compliance standards.
        <span className="inline-block text-blue-600 scale-150 animate-pulse">
          |
        </span>
        <BsFillCursorFill className="inline-block text-3xl text-blue-600 -rotate-90 translate-y-full" />
      </span>
    </div>
  );

export const data = [
  {
    id: 1,
    title: "Inspections",
    Component: IssuesComponent,
    cardTitle: "On-Site Quality Inspection",
    cardSubtitle:
      "Ensure your products meet sustainable quality standards with our comprehensive on-site inspection services across India, China, Bangladesh, and Vietnam.",
  },
  {
    id: 2,
    title: "Factory Audits",
    Component: KanbanComponent,
    cardTitle: "Factory Compliance Audits",
    cardSubtitle:
      "Gain vital insights into your supply chain and make informed sourcing decisions through independent factory audits by our highly experienced auditors.",
  },
  {
    id: 3,
    title: "Assessments",
    Component: GanttComponent,
    cardTitle: "Sustainability Assessments",
    cardSubtitle:
      "We go beyond standard inspections and audits to help you meet the highest ethical and environmental standards through specialized sustainability assessments.",
  },
  {
    id: 4,
    title: "Additional Services",
    Component: DocumentationComponent,
    cardTitle: "Additional Quality Assurance Services",
    cardSubtitle:
      "Streamline your operations with lab test management, document verification (TruDocx™), and production follow-up services to ensure product quality and compliance.",
  },
];
