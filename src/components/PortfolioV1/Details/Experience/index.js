import { motion } from "framer-motion";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Section from "../Section/index.js";
import experienceTimeline from "./experienceTimleine.js";

import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

const Experience = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Section title="Experience" icon={faGraduationCap} />

      <motion.div
        animate={{ y: 0, opacity: 1, scale: 1 }}
        initial={{ y: 300, opacity: 0.3, scale: 0.3 }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 10 }}
        style={{ marginTop: "2rem" }}
        id="experience"
      >
        <div className="experience-title">
          Education & <span>Experience</span>
        </div>
        <VerticalTimeline layout="1-column-left">
          {experienceTimeline.map((experience) => {
            return (
              <VerticalTimelineElement
                key={experience.id}
                date={experience.date}
                dateClassName="experience-date"
                icon={experience.icon}
                iconStyle={{ background: "#1f1f21" }}
                contentStyle={{ background: "#1F1F21" }}
              >
                <h3 className="experience-company">{experience.company}</h3>
                <h2 className="experience-designation">
                  {experience.designation}
                </h2>
                <h5 className="vertical-timeline-element-subtitle">
                  {experience.location}
                </h5>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default Experience;
