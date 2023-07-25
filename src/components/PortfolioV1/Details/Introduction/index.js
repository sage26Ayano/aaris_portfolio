import { motion } from "framer-motion";

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
        <motion.div
          animate={{
            rotate: [0, 0, 360, 360, 360],
            borderRadius: ["30%", "50%", "100%", "100%", "100%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className={styles.logo}
        >
          <span>A</span>h
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
