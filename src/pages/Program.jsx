import { Link } from "react-router-dom";
import styles from "./Program.module.css";

export default function Program() {
  return (
    <section>
      <div>
        <h1>Program for helgen</h1>
        <div className={styles.section}>
          <h2>Fredag 11.09</h2>
          <p className={styles.sub}>Musikkbingo på Pillarguri Cafe</p>
          <p className={styles.sub}>Kl. 18.00</p>
          <p className={styles.sub}>Det blir servert pizza</p>
        </div>
        <div className={styles.section}>
          <h2>Lørdag 12.09</h2>
          <p className={styles.sub}>Vielse i Nord-Sel kirke</p>
          <p className={styles.sub}>Kl. 12.00</p>
          <div className={styles.break}></div>
          <p className={styles.sub}>Bryllupskake og apertiff på Ulsvold</p>
          <div className={styles.break}></div>

          <p className={styles.sub}>Middag og fest i Sel samfunnshus</p>
          <div className={styles.break}></div>
          <p className={styles.sub}>Antrekk: Mørk dress</p>
        </div>
      </div>
    </section>
  );
}
