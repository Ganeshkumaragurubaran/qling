import { motion, MotionConfig } from "framer-motion";

const Testimonial = ({ imgSrc, name, title, company, content }) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full p-8 overflow-hidden bg-white border-2 rounded-lg border-zinc-900 md:p-12"
    >
      <div className="flex items-center gap-6 mb-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="bg-indigo-200 border-2 rounded-lg size-24 border-zinc-900"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
          <span className="text-zinc-600">
            {title} – <span className="text-indigo-600">{company}</span>
          </span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.p>
    </motion.div>
  </MotionConfig>
);
export const OPTIONS = [
  {
    title: "Textile Manufacturers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Jeff"
        name="Jeff W."
        title="Factory Manager"
        company="TextileWorks"
        content="QLINGZ helped us identify critical issues in our production line. Their thorough inspections allowed us to fix problems before they escalated and their training has significantly improved our compliance."
      />
    ),
  },
  {
    title: "Apparel Brands",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dan"
        name="Dan S."
        title="CEO"
        company="WearIt"
        content="As a brand focused on sustainable sourcing, QLINGZ’s factory compliance audits have been invaluable. They not only identify risks but also provide actionable insights to ensure our factories meet high ethical standards."
      />
    ),
  },
  {
    title: "Footwear Suppliers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Carey"
        name="Carey J."
        title="Supplier"
        company="StepRight"
        content="Thanks to QLINGZ, we’ve been able to proactively address quality issues in our factories. Their detailed inspection reports and compliance audits help us maintain high standards."
      />
    ),
  },
  {
    title: "Home Goods Exporters",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dani"
        name="Moriah H."
        title="Export Manager"
        company="ComfortLiving"
        content="QLINGZ is our go-to partner for quality inspections. Their ability to find and solve issues in the factory has improved our product quality and helped us meet customer expectations."
      />
    ),
  },
  {
    title: "Consumer Goods Retailers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Phil"
        name="Phil K."
        title="Operations Manager"
        company="RetailEdge"
        content="We rely on QLINGZ for their thorough compliance audits. They’ve helped us ensure that our suppliers meet international safety and ethical standards."
      />
    ),
  },
  {
    title: "Textile Suppliers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Stetson"
        name="Stetson R."
        title="Supply Chain Manager"
        company="TextileSupplies"
        content="QLINGZ’s inspection services have transformed how we manage quality in our supply chain. Their focus on identifying risks early has saved us both time and costs."
      />
    ),
  },
  {
    title: "Factory Owners",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Patty"
        name="Patty G."
        title="Factory Owner"
        company="TopTextiles"
        content="The training provided by QLINGZ has significantly improved our internal quality control processes. Their inspections are thorough, and their guidance is always actionable."
      />
    ),
  },
  {
    title: "Global Brands",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Kert"
        name="Kert Y."
        title="Global Sourcing Manager"
        company="GlobalBrands"
        content="Working with QLINGZ has been a game changer for us. They identify potential risks in our factories before they affect production, ensuring a seamless supply chain."
      />
    ),
  },
  {
    title: "Local Suppliers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Joanne"
        name="Joanne F."
        title="Supplier"
        company="Local Textiles"
        content="QLINGZ helped us improve our factory compliance, ensuring that we meet both local and international standards. Their inspections are detailed, and their advice has been incredibly helpful."
      />
    ),
  },
];
