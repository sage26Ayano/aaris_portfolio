import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGraduationCap,
  faCode,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const navbarList = [
  {
    id: 1,
    name: "#introduction",
    title: "Introduction",
    icon: (
      <FontAwesomeIcon
        icon={faHouse}
        className="hover-style"
        style={{ color: "#ffffff" }}
      />
    ),
  },
  {
    id: 2,
    name: "#experience",
    title: "Experience",
    icon: (
      <FontAwesomeIcon
        icon={faGraduationCap}
        className="hover-style"
        style={{ color: "#ffffff" }}
      />
    ),
  },
  {
    id: 1,
    name: "#skills",
    title: "Skills",
    icon: (
      <FontAwesomeIcon
        icon={faCode}
        className="hover-style"
        style={{ color: "#ffffff" }}
      />
    ),
  },
  {
    id: 1,
    name: "#projects",
    title: "Projects",
    icon: (
      <FontAwesomeIcon
        icon={faBook}
        className="hover-style"
        style={{ color: "#ffffff" }}
      />
    ),
  },
];

export default navbarList;
