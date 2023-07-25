import Experience from "./Experience";
import Introduction from "./Introduction";
// import Projects from "./Projects";
import Skills from "./Skills";

import styles from "./styles.module.css";

const Details = () => {
  return (
    <div className={styles["details-container"]}>
      <Introduction />
      <Experience />
      <Skills />
      {/* <Projects /> */}
    </div>
  );
};

export default Details;
