import Content from "./Content";
import { TbArrowNarrowRight as NextIcon } from "react-icons/tb";
import SidePanel from "./SidePanel";
export default function Main() {
  return (
    <main className="grid grid-cols-12 min-h-[calc(100vh-56px)] px-4 py-2 mb-4">
      <article className=" col-start-1 col-end-[-1] lg:col-end-10">
        {/* HEADER SECTION */}
        <section className="flex items-center mb-4 gap-3">
          <button className="btn-primary filled">All Section</button>
          <button className="btn-primary">Physics</button>
          <button className="btn-primary">Chemistry</button>
          <button className="btn-primary">Maths</button>
        </section>
        {/* CONTENT SECTION */}
        <Content />
        {/* CONTENT ACTIONS */}
        <div className="flex gap-2 mt-3">
          <button className="btn-primary">Clear Response</button>
          <button className="btn-primary">Review</button>
          <button className="btn-primary">Dump</button>
          <button className="btn-primary">Previous</button>
          <button className="btn-primary filled flex items-center gap-1">
            Next <NextIcon size={24} />
          </button>
        </div>
      </article>
      {/* SIDEBAR SECTION */}
      <SidePanel />
    </main>
  );
}
