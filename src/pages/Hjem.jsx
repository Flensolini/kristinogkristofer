import styles from "./Hjem.module.css";

export default function Hjem() {
  return (
    <section className={styles.invitation}>
      <img
        className={styles.monogram}
        src="/logoKK.svg"
        alt="Kristin &amp; Kristofer monogram"
      />

      <p className={styles.intro}>Vi gifter oss</p>
      <div className={styles.details}>
        <p className={styles.date}>
          <span>12</span>
          <span className={styles.sep}>|</span>
          <span>09</span>
          <span className={styles.sep}>|</span>
          <span>26</span>
        </p>
      </div>

      <div className={styles.names}>
        <h1 className={styles.name}>Kristin Skaugen</h1>
        <span className={styles.amp}>&amp;</span>
        <h1 className={styles.name}>Kristofer Myhre</h1>
      </div>

      <img
        className={styles.photo}
        src="/IMG_6980.jpeg"
        alt="Kristin &amp; Kristofer"
      />
    </section>
  );
}
