import { Link } from "react-router-dom";
import "../style/header.css";
export default function Header() {
  return (
    <>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p>Contact</p>
            </Link>
          </li>
          <li>Twitter</li>
        </ul>
      </nav>
    </>
  );
}
