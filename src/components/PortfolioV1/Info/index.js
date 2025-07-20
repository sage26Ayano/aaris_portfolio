import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCopyright,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Navigation from "../Details/Navigation";

import Aaris from "../assests/info/aaris.jpg";
import styles from "./styles.module.css";

const Info = ({ showPdf, setShowPdf }) => {
  return (
    <div className={styles["container"]} id="info">
      <Navigation />

      <div className={styles["info-container"]}>
        <div className={styles["info-container__title"]}>
          <div>
            <span>A</span>aris
          </div>
          <span>Ahmed</span>
        </div>

        <img src={Aaris} alt="aaris" />

        <div style={{ textAlign: "center" }}>
          <div className={styles["info-container__address"]}>
            Bengaluru, Karnataka
          </div>

          <div className={styles["info-container__copyright"]}>
            <FontAwesomeIcon icon={faCopyright} />
            <span>All Rights Reserved</span>
          </div>

          <div className={styles["info-container__links"]}>
            <div className={styles["info-container__links-cover"]}>
              <a href="#contact" target="blank">
                <FontAwesomeIcon icon={faEnvelope} size="2xs" beatFade />
              </a>
            </div>

            <div className={styles["info-container__links-cover"]}>
              <a href="https://github.com/sage26ayano" target="blank">
                <FontAwesomeIcon icon={faGithub} size="2xs" beatFade />
              </a>
            </div>

            <div className={styles["info-container__links-cover"]}>
              <a
                href="https://www.linkedin.com/in/aaris-ahmed-480773216/"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedin} beatFade size="2xs" />
              </a>
            </div>

            <div
              className={styles["info-container__links-cover"]}
              onClick={() => setShowPdf(!showPdf)}
            >
              <FontAwesomeIcon icon={faFile} beatFade size="2xs" />
            </div>
          </div>
        </div>

        <a href="#contact">
          <button className={styles["info-container__hire"]}>HIRE ME!</button>
        </a>
      </div>
    </div>
  );
};

export default Info;
