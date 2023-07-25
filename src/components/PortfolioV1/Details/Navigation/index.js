import navbarList from "./navbarList.js";
import "./styles.css";

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <ul>
        {navbarList.map((item) => (
          <li>
            <a key={item.id} href={item.name}>
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
