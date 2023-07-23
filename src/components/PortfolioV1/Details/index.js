import Introduction from "./Introduction";
import styles from "./styles.module.css";

const Details = () => {
  return (
    <div>
      <nav className={styles.navigation}></nav>
      <Introduction />
    </div>
  );
};

export default Details;
