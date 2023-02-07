import { motion, MotionProps } from "framer-motion";
import fig from "@/assets/images/fig-1.png";
import optionA from "@/assets/images/options/option-a.svg";
import optionB from "@/assets/images/options/option-b.svg";
import optionC from "@/assets/images/options/option-c.svg";
import optionD from "@/assets/images/options/option-d.svg";

import Image from "next/image";
import { useState } from "react";

const containerProps: MotionProps = {
  initial: { transform: "translateY(50%)", opacity: 0 },
  animate: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
};

type Tab = "all" | "physics" | "chemistry" | "maths";

export default function Content() {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const handleTabChange = (name: Tab) => {
    setActiveTab(name);
  };

  return (
    <motion.section
      {...containerProps}
      className="flex min-h-[80%]  flex-col rounded overflow-hidden border border-slate-300"
    >
      {/* CONTENT HEADER */}
      <div className="bg-blue-500 flex h-fit justify-between py-2 px-4 text-white">
        {/* QUESTION NO */}
        <h2>Question No 1</h2>

        {/* LANGUAGE OPTIONS */}
        <div className="flex gap-2 ">
          <span>View In</span>
          <select className="text-black rounded px-2 cursor-pointer !outline-none ">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="french">France</option>
          </select>
        </div>
      </div>
      {/* CONTENT BODY */}
      <div className="grid sm:grid-cols-2 p-4 gap-4">
        {/* QUESTION INSTRUCTIONS PART */}
        <div>
          <h3 className="font-semibold text-blue-700 text-lg mb-2">
            Question Instructions
          </h3>
          <p>
            Passage: You want to hit a small box on the floor with a marble
            fired from a spring loaded gun that is mounted on a table. The
            target box is distance <b>R</b> horizontally form the edge of the
            table; see figure to the right. You compress the spring at distance{" "}
            <b>d</b>, but the center of the marble falls short by a distance{" "}
            <b>r</b> of the center of the box. How far should you compress the
            spring to score a direct hit <i>(neglect friction)</i>?
          </p>
        </div>

        {/* QUESTION PART */}
        <div>
          <h3 className="font-semibold text-blue-700 text-lg mb-2">Question</h3>
          <p>
            A block of mass <b>m</b> is projected with the velocity v
            <sub>0</sub> as shown in the{" "}
            <abbr className="no-underline" title="figure">
              fig
            </abbr>
            . The distance between free ends is{" "}
            <span className="font-cursive font-semibold">l</span>
            <sub>0</sub>. Maximum displacement of the block during the motion.
            <Image src={fig} alt="figure Image" width={250} />
          </p>

          {/* ANSWER OPTIONS */}
          <div className="mt-4 flex flex-col gap-1">
            <label className="radio-option">
              <input name="answer" type="radio" value="A" />
              <span className="flex items-center gap-4">
                (A) <Image src={optionA} alt="Option A" />
              </span>
            </label>
            <label className="radio-option">
              <input name="answer" type="radio" value="B" />
              <span className="flex items-center gap-4">
                (B) <Image src={optionB} alt="Option B" />
              </span>
            </label>
            <label className="radio-option">
              <input name="answer" type="radio" value="C" />
              <span className="flex items-center gap-4">
                (C) <Image src={optionC} alt="Option C" />
              </span>
            </label>
            <label className="radio-option">
              <input name="answer" type="radio" value="D" />
              <span className="flex items-center gap-4">
                (D) <Image src={optionD} alt="Option D" />
              </span>
            </label>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
