import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import Section from "../Section";

import styles from "./styles.module.css";

const Contact = () => {
  return (
    <div id="contact" className={styles["contact-container"]}>
      <Section title="Contact" icon={faAddressBook} />

      <div className={styles.title}>
        <span>Contact</span> me
      </div>

      {/* Contact form */}
      <div className={styles["contact-form"]}>
        <form action="https://formspree.io/f/maygnkqy" method="POST">
          <div className={styles["contact-form__label"]}>
            <label for="fname">First Name: </label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Your First Name"
              required
            />
          </div>

          <div className={styles["contact-form__label"]}>
            <label for="lname">Last Name: </label>
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
            />
          </div>

          <div className={styles["contact-form__label"]}>
            <label for="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className={styles["contact-form__label"]}>
            <label for="subject">Subject: </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </div>

          <div className={styles["contact-form__label"]}>
            <label for="message">Message: </label>
            <textarea
              name="message"
              placeholder="Your message"
              id="message"
              cols="40"
              required
            />
          </div>

          <button type="submit" className={styles["submit-button"]}>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
