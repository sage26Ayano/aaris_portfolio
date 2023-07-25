import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

const Section = () => {
  return (
    <div className={styles["section-container"]}>
      <FontAwesomeIcon icon={faHouse} />
      <div className={styles["section-title"]}>Introduction</div>
    </div>
  );
};

export default Section;
