import { MdMenu } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="relative bg-blue-600 text-gray-100 text-4xl flex justify-center py-2 px-4">
      <h1 className="uppercase font-bold">Demo Online Test</h1>
      <button
        title="Menu"
        className="absolute right-0 top-[50%] translate-y-[-50%] mr-4 px-1 rounded lg:hidden  hover:bg-blue-500 active:scale-95 transition-all"
      >
        <MdMenu />
      </button>
    </header>
  );
}
