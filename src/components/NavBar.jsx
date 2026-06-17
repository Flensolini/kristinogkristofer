import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const links = [
  { to: "/", label: "Program", end: true },
  { to: "/detaljer", label: "Detaljer" },
  { to: "/rsvp", label: "RSVP" },
  { to: "/gaveliste", label: "Gaveliste" },
];

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          My Site
        </NavLink>
        <nav className={styles.nav}>
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
