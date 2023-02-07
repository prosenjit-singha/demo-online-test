import { useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { MdMenu } from "react-icons/md";
import SideMenu from "./SideMenu";

const headerVariant: MotionProps = {
  initial: { transform: "translateY(-100%)" },
  animate: { transform: "translateY(0%)" },
  exit: { transform: "translateY(-100%)" },
  transition: {
    // ease: "easeOut",
    duration: 1,
  },
};

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <motion.header
      {...headerVariant}
      className="relative bg-blue-600 text-gray-100 text-3xl sm:text-4xl flex md:justify-center py-2 px-4 z-50"
    >
      <motion.h1
        {...headerVariant}
        transition={{
          delay: 0.5,
          duration: 0.75,
        }}
        className="uppercase font-bold"
      >
        Demo Online Test
      </motion.h1>
      <button
        onClick={() => setOpenNav(true)}
        title="Menu"
        className="absolute right-0 top-[50%] translate-y-[-50%] mr-4 px-1 rounded lg:hidden  hover:bg-blue-500 active:scale-95 transition-all"
      >
        <MdMenu />
      </button>
      <SideMenu open={openNav} onClose={() => setOpenNav(false)} />
    </motion.header>
  );
}
