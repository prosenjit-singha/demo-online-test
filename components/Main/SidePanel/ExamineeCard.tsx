// import Image from "next/image";
// import user from "@/assets/images/people2.png";

function ExamineeCard() {
  return (
    <div className="flex items-center gap-3 p-3 border rounded shadow-lg">
      <img
        alt="user"
        src={
          "https://variety.com/wp-content/uploads/2022/12/Chadwick-1.jpg?w=681&h=383&crop=1&resize=681%2C383"
        }
        width={80}
        className="rounded object-cover aspect-square"
      />
      <div className="">
        <h3 className="font-semibold text-lg">Prosenjit</h3>
        <p className="text-sm">
          <span className="block font-semibold">Time Left: </span>
          <span className="block font-semibold text-slate-600">
            01 hour 05 min
          </span>
        </p>
      </div>
    </div>
  );
}

export default ExamineeCard;
