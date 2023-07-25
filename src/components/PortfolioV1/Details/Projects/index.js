import styles from "./styles.module.css";

const Projects = () => {
  return (
    <div className={styles["projects-container"]} id="projects">
      <div className={styles["title"]}>
        <span style={{ color: "#15cf81" }}>P</span>rojects
      </div>

      <div className={styles["projects"]}>All Projects</div>
    </div>
  );
};

export default Projects;
