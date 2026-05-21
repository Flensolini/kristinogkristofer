import styles from './About.module.css';

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <p className={styles.lede}>
        A short paragraph introducing yourself — what you do, where you're
        based, and what you're interested in right now.
      </p>

      <h2>Background</h2>
      <p>
        A couple of sentences about your background — roles, projects you've
        worked on, or topics you care about.
      </p>

      <h2>Now</h2>
      <p>
        What you're currently focused on. This section is easy to keep fresh —
        update it whenever your focus shifts.
      </p>

      <h2>Off the clock</h2>
      <p>Hobbies, side interests, or anything else that rounds you out.</p>
    </section>
  );
}
