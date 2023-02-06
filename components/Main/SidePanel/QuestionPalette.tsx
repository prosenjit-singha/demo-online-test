import styles from "@/styles/QuestionPalette.module.css";

export default function QuestionPalette() {
  return (
    <div className={styles.container}>
      {/* HEADING */}
      <h3 className={styles.heading}>Question Palette</h3>
      {/* buttons */}
      <div className={styles.buttons}>
        <button className={"bg-red-300 " + styles.btn}>1</button>
        <button className={"bg-teal-300 " + styles.btn}>2</button>
        <button className={"bg-green-300 " + styles.btn}>3</button>
        <button className={"bg-blue-300 " + styles.btn}>4</button>
        <button className={"bg-sky-300 " + styles.btn}>5</button>
        <button className={"bg-cyan-300 " + styles.btn}>6</button>
        <button className={"bg-violet-300 " + styles.btn}>7</button>
        <button className={"bg-yellow-300 " + styles.btn}>8</button>
        <button className={"bg-purple-300 " + styles.btn}>9</button>
        <button className={"bg-orange-300 " + styles.btn}>10</button>
      </div>
    </div>
  );
}
