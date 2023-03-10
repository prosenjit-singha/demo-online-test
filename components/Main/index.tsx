import { useState } from "react";
import Content from "./Content";
import { TbArrowNarrowRight as NextIcon } from "react-icons/tb";
import SidePanel from "./SidePanel";
import { motion, MotionProps, Variants } from "framer-motion";

const buttonsVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.75,
    },
  },
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const buttonsProps: MotionProps = {
  variants: buttonsVariants,
  initial: "hidden",
  animate: "visible",
};

const buttonVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: { opacity: 0, scale: 0, boxShadow: "none" },
};

const buttonProps: MotionProps = {
  variants: buttonVariants,
  whileHover: {
    scale: 1.05,
    boxShadow: "0 10px 15px -3px hsla(221, 83%, 53%, 0.75)",
    transition: {
      type: "tween",
      ease: "easeOut",
    },
  },
  whileTap: {
    scale: 1,
    boxShadow: "0 7px 8px -5px hsla(221, 83%, 53%, 0.75)",
  },
};

type Tab = "all" | "physics" | "chemistry" | "maths";

export default function Main() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  return (
    <main className="max-w-7xl mx-auto grid grid-cols-12 min-h-[calc(100vh-56px)] px-4 py-2 pb-8 overflow-hidden">
      <article className=" col-start-1 col-end-[-1] lg:col-end-10">
        {/* HEADER SECTION */}
        <motion.section
          {...buttonsProps}
          className="flex flex-wrap items-center mb-4 gap-3"
        >
          <motion.button
            {...buttonProps}
            onClick={() => setActiveTab("all")}
            className={`btn-primary ${activeTab === "all" && "filled"}`}
          >
            All Section
          </motion.button>
          <motion.button
            {...buttonProps}
            onClick={() => setActiveTab("physics")}
            className={`btn-primary ${activeTab === "physics" && "filled"}`}
          >
            Physics
          </motion.button>
          <motion.button
            {...buttonProps}
            onClick={() => setActiveTab("chemistry")}
            className={`btn-primary ${activeTab === "chemistry" && "filled"}`}
          >
            Chemistry
          </motion.button>
          <motion.button
            {...buttonProps}
            onClick={() => setActiveTab("maths")}
            className={`btn-primary ${activeTab === "maths" && "filled"}`}
          >
            Maths
          </motion.button>
        </motion.section>
        {/* CONTENT SECTION */}
        <Content />
        {/* CONTENT ACTIONS */}
        <motion.div {...buttonsProps} className="flex gap-2 mt-3 flex-wrap">
          <motion.button {...buttonProps} className="btn-primary">
            Clear Response
          </motion.button>
          <motion.button {...buttonProps} className="btn-primary">
            Review
          </motion.button>
          <motion.button {...buttonProps} className="btn-primary">
            Dump
          </motion.button>
          <motion.button {...buttonProps} className="btn-primary">
            Previous
          </motion.button>
          <motion.button
            {...buttonProps}
            className="btn-primary filled flex items-center gap-1"
          >
            Next <NextIcon size={24} />
          </motion.button>
        </motion.div>
      </article>
      {/* SIDEBAR SECTION */}
      <SidePanel />
    </main>
  );
}
