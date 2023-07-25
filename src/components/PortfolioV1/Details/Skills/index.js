import { motion } from "framer-motion";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import skillsList from "./skillsList";

import styles from "./styles.module.css";
import Section from "../Section";

const Skills = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
      <Section title="Skills" icon={faCode} />

      <motion.div
        animate={{ y: 0, opacity: 1, scale: 1 }}
        initial={{ y: 300, opacity: 0.3, scale: 0.3 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 10 }}
        style={{ marginTop: "2rem" }}
        id="skills"
      >
        <div className={styles.title}>
          My <span style={{ color: "#15cf81" }}>Skills</span>
        </div>

        <div className={styles["skills-container"]}>
          {skillsList.map((skill) => (
            <div className={styles["skills"]} key={skill.id}>
              {skill.icon}
              <div className={styles["skill-name"]}>{skill.name}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
