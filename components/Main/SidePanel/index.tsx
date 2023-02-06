import ExamineeCard from "./ExamineeCard";
import Legend from "./Legend";
import QuestionPalette from "./QuestionPalette";

export default function SidePanel() {
  return (
    <section className="ml-4 col-start-10 col-end-13 flex flex-col gap-4">
      <ExamineeCard />
      <QuestionPalette />
      <Legend />
    </section>
  );
}
