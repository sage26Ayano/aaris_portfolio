import Introduction from "./Introduction";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import styles from "./styles.module.css";

const Details = () => {
  return (
    <div className={styles["details-container"]}>
      <Introduction />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Details;
