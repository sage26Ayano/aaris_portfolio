import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSchool,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const experienceTimeline = [
  {
    id: 5,
    designation: "Software Engineer II",
    company: "Moresand Technologies",
    date: "from Jan, 2025",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    location: "Bengaluru, Karnataka",
  },
  {
    id: 1,
    designation: "Software Engineer",
    company: "COGOPORT",
    date: "from July, 2022",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
    location: "Gurugram, Haryana",
  },
  {
    id: 2,
    company: "NATIONAL INSTITUTE OF TECHNOLOGY UTTARAKHAND",
    designation: "Bachelor of Technology",
    date: "2018 - 2022",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    location: "Roorkee, Uttarakhand",
  },
  {
    id: 3,
    company: "DELHI PUBLIC SCHOOL, ROORKEE",
    designation: "Class XII",
    date: "2016 - 2017",
    icon: <FontAwesomeIcon icon={faSchool} />,
    location: "Roorkee, Uttarakhand",
  },
  {
    id: 4,
    company: "DELHI PUBLIC SCHOOL, ROORKEE",
    designation: "Class X",
    date: "2014 - 2015",
    icon: <FontAwesomeIcon icon={faSchool} />,
    location: "Roorkee, Uttarakhand",
  },
];

export default experienceTimeline;
