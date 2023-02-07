import { MotionProps, motion } from "framer-motion";

type Props = {
  cardProps?: MotionProps;
};

function ExamineeCard({ cardProps }: Props) {
  return (
    <motion.div
      {...cardProps}
      className="flex items-center gap-3 p-3 border rounded shadow-lg"
    >
      <img
        alt="user"
        src={
          "https://variety.com/wp-content/uploads/2022/12/Chadwick-1.jpg?w=681&h=383&crop=1&resize=681%2C383"
        }
        width={80}
        className="rounded object-cover aspect-square"
      />
      <div className="w-full">
        <h3 className="font-semibold text-lg ">Prosenjit</h3>
        <div className="">
          <p className="text-sm">
            <span className="block font-semibold text-blue-900">
              Time Left:{" "}
            </span>
            <span className="block font-semibold text-blue-900/70">
              01 hour 05 min
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ExamineeCard;
