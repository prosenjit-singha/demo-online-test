import { MotionProps, motion } from "framer-motion";

type Props = {
  cardProps?: MotionProps;
};

export default function Legend({ cardProps }: Props) {
  return (
    <motion.div
      {...cardProps}
      className="rounded overflow-hidden border shadow-xl hover:shadow-blue-300/60"
    >
      <h1 className="px-3 py-1 bg-blue-500 text-white">
        Legend (Click to view)
      </h1>
      {/* INFO SECTION */}
      <ul className="grid grid-cols-2 px-3 py-2 gap-1 font-semibold ">
        <li className="bg-green-600/20 text-green-900 text-center rounded py-1 px-2">
          4 Answer
        </li>
        <li className="bg-red-500/20 text-red-700 text-center rounded py-1 px-2">
          2 No Answer
        </li>
        <li className="bg-purple-500/20 text-purple-700 text-center rounded py-1 px-2">
          1 Review+Ans
        </li>
        <li className="bg-yellow-500/20 text-yellow-800 text-center rounded py-1 px-2">
          1 Review-Ans
        </li>
        <li className="bg-slate-500/30 text-slate-800 text-center rounded py-1 px-2">
          1 Dump
        </li>
        <li className="bg-slate-100 text-slate-700 text-center rounded py-1 px-2">
          1 No Visit
        </li>
      </ul>
      <h3 className="px-3 py-1 mx-3 rounded bg-blue-200 font-semibold text-blue-900 text-center">
        10 All Questions
      </h3>

      {/* BUTTONS */}
      <div className="grid grid-cols-2 gap-1 px-3 py-2">
        <button className="btn-primary hover:bg-blue-100">Profile</button>
        <button className="btn-primary hover:bg-blue-100">Instr</button>
        <button className="btn-primary hover:bg-blue-100">Questions</button>
        <button className="btn-primary hover:bg-blue-100">Submit</button>
      </div>
    </motion.div>
  );
}
