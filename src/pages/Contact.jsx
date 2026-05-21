import styles from './Contact.module.css';

const links = [
  { label: 'Email', href: 'mailto:you@example.com', value: 'you@example.com' },
  { label: 'GitHub', href: 'https://github.com/yourhandle', value: '@yourhandle' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle', value: 'in/yourhandle' },
];

export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p className={styles.lede}>
        The best way to reach me is over email. I usually reply within a couple
        of days.
      </p>

      <ul className={styles.list}>
        {links.map(({ label, href, value }) => (
          <li key={label} className={styles.row}>
            <span className={styles.label}>{label}</span>
            <a href={href}>{value}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
