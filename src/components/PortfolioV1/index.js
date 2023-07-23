import Info from "./Info";
import Details from "./Details";
import styles from "./styles.module.css";

const PortfolioV1 = () => {
  return (
    <div className={styles.portfolio}>
      <Info />
      <Details />
    </div>
  );
};

export default PortfolioV1;
