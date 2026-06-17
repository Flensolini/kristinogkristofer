import { useState } from "react";

import styles from "./RSVP.module.css";

export default function RSVP() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "511ec048-82f7-4e5b-a17c-78d87a5a4685");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Takk for svar!" : "En feil oppsto");
  };

  return (
    <div>
      <h1>Svar innen 01.08.2026</h1>
      <div className={styles.topText}>
        Om den andre parten ikke kan komme, noterer du det bare i det nederste
        feltet.
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Navn
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            name="name"
            required
          />
        </div>
        <fieldset className={styles.fieldset}>
          <legend className={styles.label}>Kommer du?</legend>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption} htmlFor="attending-both">
              <input
                className={styles.radio}
                id="attending-both"
                type="radio"
                name="attending"
                value="Fredag og Lørdag"
                required
              />
              Jeg/vi kommer fredag og lørdag
            </label>
            <label className={styles.radioOption} htmlFor="attending-saturday">
              <input
                className={styles.radio}
                id="attending-saturday"
                type="radio"
                name="attending"
                value="Lørdag"
                required
              />
              Jeg/vi kommer lørdag
            </label>
            <label className={styles.radioOption} htmlFor="attending-no">
              <input
                className={styles.radio}
                id="attending-no"
                type="radio"
                name="attending"
                value="Kommer ikke"
                required
              />
              Jeg/vi kommer ikke
            </label>
          </div>
        </fieldset>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">
            Annet (allergi, etc.)
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
          ></textarea>
        </div>
        <button className={styles.button} type="submit">
          Send
        </button>
        {result && <p className={styles.result}>{result}</p>}
      </form>
    </div>
  );
}
