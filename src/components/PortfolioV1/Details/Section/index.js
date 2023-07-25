import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css";

const Section = ({ title = "Introduction", icon = faHouse }) => {
  return (
    <div className={styles["section-container"]}>
      <FontAwesomeIcon icon={icon} />
      <div className={styles["section-title"]}>{title}</div>
    </div>
  );
};

export default Section;
