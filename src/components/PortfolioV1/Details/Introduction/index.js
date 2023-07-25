import Section from "../Section";
import styles from "./styles.module.css";

const Introduction = () => {
  return (
    <div className={styles["container"]} id="introduction">
      <Section />

      <div className={styles["intro-container"]}>
        <div>
          Hi, I am{" "}
          <span className={styles["intro-container__name"]}>Aaris Ahmed,</span>
        </div>
        <div>Web Developer & Software Engineer...</div>
      </div>

      <div className={styles["logo-container"]}>
        <div className={styles.logo}>
          <span>A</span>h
        </div>
      </div>
    </div>
  );
};

export default Introduction;
