import { motion } from "framer-motion";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Section from "../Section";
import portfolio from "../../assests/projects/portfolio.jpg";
import crypto from "../../assests/projects/crypto.jpg";
import ecommerce from "../../assests/projects/ecommerce.jpg";

import styles from "./styles.module.css";

const Projects = () => {
  return (
    <div className={styles["projects-container"]} id="projects">
      <Section title="Projects" icon={faBook} />

      <div className={styles["title"]}>
        My <span style={{ color: "#15cf81" }}>Projects</span>
      </div>

      <motion.div
        animate={{ y: 0, opacity: 1, scale: 1 }}
        initial={{ y: 300, opacity: 0.3, scale: 0.3 }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 10 }}
        className={styles["projects"]}
      >
        <div className={styles["project"]}>
          <img src={portfolio} alt="portfolio" />
          <div className={styles["project-title"]}>
            <a
              href="https://sage26ayano.github.io/aaris_portfolio/"
              target="blank"
            >
              Portfolio
            </a>
          </div>
        </div>

        <div className={styles["project"]}>
          <img src={ecommerce} alt="ecommerce" />
          <div className={styles["project-title"]}>
            <a href="https://aaris-kapable.netlify.app/" target="blank">
              Kapable
            </a>
          </div>
        </div>
        <div className={styles["project"]}>
          <img src={crypto} alt="crypto" />
          <div className={styles["project-title"]}>Crypto-maniac</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
