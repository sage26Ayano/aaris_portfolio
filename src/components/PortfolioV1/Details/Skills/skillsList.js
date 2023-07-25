import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSquareJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { SiRedux, SiPython } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { PiBooksFill } from "react-icons/pi";

const skillsList = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon icon={faReact} size="6x" style={{ color: "#07D5FF" }} />
    ),
    name: "React",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faSquareJs}
        size="6x"
        style={{ color: "#e0dc4e" }}
      />
    ),
    name: "JavaScript",
  },
  {
    id: 1,
    icon: (
      <FontAwesomeIcon icon={faHtml5} size="6x" style={{ color: "#E54C21" }} />
    ),
    name: "HTML",
  },
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faCss3Alt}
        size="6x"
        style={{ color: "#3057E5" }}
      />
    ),
    name: "CSS",
  },
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faBootstrap}
        size="6x"
        style={{ color: "#8A0AFC" }}
      />
    ),
    name: "Bootstrap",
  },
  {
    id: 1,
    icon: <SiRedux size="70" style={{ color: "#7749BD" }} />,
    name: "Redux",
  },
  {
    id: 1,
    icon: <PiBooksFill size="70" style={{ color: "#C02A32" }} />,
    name: "DSA",
  },
  {
    id: 1,
    icon: <SiPython size="70" />,
    name: "Python",
  },
  {
    id: 1,
    icon: <BiLogoJava size="70" />,
    name: "Java",
  },
];

export default skillsList;
