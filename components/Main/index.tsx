export default function Main() {
  return (
    <main className="grid grid-cols-12 min-h-[calc(100vh-56px)] px-4 py-2">
      <article className=" col-start-1 col-end-10">
        {/* HEADER SECTION */}
        <section className="flex items-center mb-4 gap-3">
          <button className="btn-primary active">All Section</button>
          <button className="btn-primary">Physics</button>
          <button className="btn-primary">Chemistry</button>
          <button className="btn-primary">Maths</button>
        </section>
        {/* CONTENT SECTION */}
        <section className="bg-green-400">content</section>
        {/* SIDEBAR SECTION */}
      </article>
      <section className="bg-blue-300 col-start-10 col-end-13">sidebar</section>
    </main>
  );
}
