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
      delayChildren: -1,
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
};

const bottomButtonProps: MotionProps = {
  initial: { opacity: 0, transform: "translateY(150%)" },
  animate: { opacity: 1, transform: "translateY(0%)" },
  exit: { opacity: 0, transform: "translateY(150%)" },
};

export default function Main() {
  return (
    <main className="grid grid-cols-12 min-h-[calc(100vh-56px)] px-4 py-2 mb-4">
      <article className=" col-start-1 col-end-[-1] lg:col-end-10">
        {/* HEADER SECTION */}
        <motion.section
          {...buttonsProps}
          className="flex items-center mb-4 gap-3"
        >
          <motion.button {...buttonProps} className="btn-primary filled">
            All Section
          </motion.button>
          <motion.button {...buttonProps} className="btn-primary">
            Physics
          </motion.button>
          <motion.button {...buttonProps} className="btn-primary">
            Chemistry
          </motion.button>
          <motion.button {...buttonProps} className="btn-primary">
            Maths
          </motion.button>
        </motion.section>
        {/* CONTENT SECTION */}
        <Content />
        {/* CONTENT ACTIONS */}
        <motion.div {...buttonsProps} className="flex gap-2 mt-3">
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
