import { useState } from "react";

import Info from "./Info";
import Details from "./Details";
import styles from "./styles.module.css";

const PortfolioV1 = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <div className={styles.portfolio}>
        <Info showPdf={showPdf} setShowPdf={setShowPdf} />
        <Details />
      </div>

      {showPdf && (
        <div className={styles["modal-backdrop"]}>
          <div className={styles["modal-content"]}>
            <button
              className={styles["modal-close"]}
              onClick={() => setShowPdf(false)}
            >
              &times;
            </button>
            <iframe
              src={`${process.env.PUBLIC_URL}/resume.pdf`}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Resume"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioV1;
