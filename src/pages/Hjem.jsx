import styles from "./Hjem.module.css";

export default function Hjem() {
  return (
    <section className={styles.invitation}>
      <div className={styles.monogram} aria-hidden="true">
        <span className={styles.monoK}>K</span>
        <span className={styles.monoAmp}>&amp;</span>
        <span className={styles.monoK}>K</span>
      </div>

      <p className={styles.intro}>
        Vi har gleden av å invitere dere
        <br />
        til vårt bryllup
      </p>

      <div className={styles.names}>
        <h1 className={styles.name}>Kristin Skaugen</h1>
        <span className={styles.amp}>&amp;</span>
        <h1 className={styles.name}>Kristofer Myhre</h1>
      </div>

      <div className={styles.details}>
        <p className={styles.venue}>Nord - Sel kirke</p>
        <p className={styles.date}>
          <span>12</span>
          <span className={styles.sep}>|</span>
          <span>09</span>
          <span className={styles.sep}>|</span>
          <span>26</span>
        </p>
        <p className={styles.time}>Kl. 12.00</p>
      </div>
    </section>
  );
}
