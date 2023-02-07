import { MotionProps, motion, Variants } from "framer-motion";
import ExamineeCard from "./ExamineeCard";
import Legend from "./Legend";
import QuestionPalette from "./QuestionPalette";

const containerVariants: Variants = {
  hidden: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.7,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.7,
    },
  },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, transform: "translate(100%)" },
  visible: { opacity: 1, transform: "translate(0%)" },
};

const containerProps: MotionProps = {
  variants: containerVariants,
  initial: "hidden",
  animate: "visible",
};

const cardProps: MotionProps = {
  variants: cardVariants,
  transition: {
    type: "spring",
  },
};

export default function SidePanel() {
  return (
    <motion.section
      {...containerProps}
      className="hidden lg:flex ml-4 col-start-10 col-end-13  flex-col gap-4"
    >
      <ExamineeCard cardProps={cardProps} />
      <QuestionPalette cardProps={cardProps} />
      <Legend cardProps={cardProps} />
    </motion.section>
  );
}
