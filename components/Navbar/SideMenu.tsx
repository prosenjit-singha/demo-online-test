import { AnimatePresence, motion, Variants, MotionProps } from "framer-motion";
import ExamineeCard from "../Main/SidePanel/ExamineeCard";
import Legend from "../Main/SidePanel/Legend";
import QuestionPalette from "../Main/SidePanel/QuestionPalette";
import Portal from "../Portal";
import { MdClose as CloseIcon } from "react-icons/md";

type Props = {
  onClose: () => void;
  open: boolean;
};

const backdropVariants: Variants = {
  hidden: { translateX: "100%", transition: { delay: 0.15 } },
  visible: { translateX: "0%", transition: { ease: "easeOut" } },
};

const menuContainerVariants: Variants = {
  hidden: { translateX: "100%" },
  visible: { translateX: "0%", transition: { delay: 0.25, ease: "easeOut" } },
};

export default function SideMenu({ onClose, open }: Props) {
  if (process.browser) {
    if (open) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={onClose}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-black/30 fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm"
            />
            <motion.div
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-blue-50 z-[100] flex flex-col gap-4 px-4 py-4 h-[100vh] fixed top-0 right-0 max-w-[300px] text-sm overflow-y-scroll"
            >
              <button
                onClick={onClose}
                title="Close Menu"
                className="text-lg border rounded w-fit p-1 px-3 flex gap-2 items-center text-red-600 border-red-300 hover:text-red-700 hover:bg-red-100"
              >
                <CloseIcon size={24} />
                <span>Close</span>
              </button>
              <ExamineeCard />
              <QuestionPalette />
              <Legend />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
