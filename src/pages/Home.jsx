import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section>
      <div className={styles.hero}>
        <h1>Hi, I'm Your Name.</h1>
        <p className={styles.lede}>
          A short, friendly intro lives here. Tell visitors what you do and what
          you're working on right now.
        </p>
        <div className={styles.ctas}>
          <Link to="/projects" className={styles.primary}>
            See projects
          </Link>
          <Link to="/contact" className={styles.secondary}>
            Get in touch
          </Link>
        </div>
      </div>

      <div className={styles.highlights}>
        <article className={styles.card}>
          <h2>What I do</h2>
          <p>A sentence or two about your focus area.</p>
        </article>
        <article className={styles.card}>
          <h2>Latest</h2>
          <p>Pull in a recent project, post, or update here.</p>
        </article>
        <article className={styles.card}>
          <h2>Elsewhere</h2>
          <p>Links to your GitHub, writing, or anywhere else.</p>
        </article>
      </div>
    </section>
  );
}
