import skillsList from "./skillsList";

import styles from "./styles.module.css";

const Skills = () => {
  return (
    <div style={{ marginTop: "2rem" }} id="skills">
      <div className={styles.title}>
        <span style={{ color: "#15cf81" }}>S</span>kills
      </div>

      <div className={styles["skills-container"]}>
        {skillsList.map((skill) => (
          <div className={styles.skills} key={skill.id}>
            {skill.icon}
            <div className={styles["skill-name"]}>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
