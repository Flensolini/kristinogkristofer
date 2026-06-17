import styles from "./RSVP.module.css";

const projects = [
  {
    title: "Project One",
    description:
      "A short description of what this project is and why it matters.",
    href: "#",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "Another project — swap in a real summary when you have one.",
    href: "#",
    tags: ["Node.js", "API"],
  },
  {
    title: "Project Three",
    description: "A third placeholder card. Duplicate this entry to add more.",
    href: "#",
    tags: ["Design"],
  },
];

export default function RSVP() {
  return (
    <section>
      <h1>Projects</h1>
      <p className={styles.lede}>
        A selection of things I've built. Click through for details.
      </p>

      <div className={styles.grid}>
        {projects.map((p) => (
          <a key={p.title} href={p.href} className={styles.card}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <ul className={styles.tags}>
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}
