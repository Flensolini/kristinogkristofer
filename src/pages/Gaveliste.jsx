import styles from "./Gaveliste.module.css";

const links = [
  { label: "Email", href: "mailto:you@example.com", value: "you@example.com" },
  {
    label: "GitHub",
    href: "https://github.com/yourhandle",
    value: "@yourhandle",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourhandle",
    value: "in/yourhandle",
  },
];

export default function Gaveliste() {
  return (
    <section>
      <h1>Gaveliste</h1>
    </section>
  );
}
