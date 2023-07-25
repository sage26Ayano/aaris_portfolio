import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import experienceTimeline from "./experienceTimleine.js";

import "react-vertical-timeline-component/style.min.css";
import "./styles.css";

const Experience = () => {
  return (
    <div style={{ marginTop: "2rem" }} id="experience">
      <div className="experience-title">
        Education & <span style={{ color: "#15cf81" }}>Experience</span>
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
    </div>
  );
};

export default Experience;
