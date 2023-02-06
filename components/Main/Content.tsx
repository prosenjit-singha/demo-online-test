import { motion, MotionProps, Variants } from "framer-motion";

const containerProps: MotionProps = {
  initial: { transform: "translateY(50%)", opacity: 0 },
  animate: {
    transform: "translateY(0%)",
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
};

export default function Content() {
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
      <div className="grid grid-cols-2 p-4 gap-4">
        {/* QUESTION INSTRUCTIONS PART */}
        <div>
          <h3 className="font-semibold text-blue-700 text-lg mb-2">
            Question Instructions
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            porro ad aut sit, aliquam nam molestiae at officia maiores, id
            cupiditate iusto? Suscipit sed quisquam tempora maxime provident eos
            minima?
          </p>
        </div>

        {/* QUESTION PART */}
        <div>
          <h3 className="font-semibold text-blue-700 text-lg mb-2">Question</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            deleniti non maxime, autem quibusdam illo dicta odit architecto
            dolor id ducimus ipsum tempore eligendi enim fuga pariatur.
            Distinctio, ea sit.
          </p>

          {/* ANSWER OPTIONS */}
          <div className="mt-4 flex flex-col gap-1">
            <label className="radio-option">
              <input name="answer" type="radio" value="A" />
              <span>(A) Answer 1</span>
            </label>
            <label className="radio-option">
              <input name="answer" type="radio" value="B" />
              <span>(B) Answer 1</span>
            </label>
            <label className="radio-option">
              <input name="answer" type="radio" value="C" />
              <span>(C) Answer 1</span>
            </label>
            <label className="radio-option">
              <input name="answer" type="radio" value="D" />
              <span>(D) Answer 1</span>
            </label>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
