import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav style={{ height: 70, width: "100%" }}>
        <ul
          style={{
            height: "100%",
            fontFamily: "Lato",
            fontWeight: "100",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            padding: 20,
            color: "white",
          }}
        >
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
          <li>Contact</li>
          <li>Linkedin</li>
        </ul>
      </nav>
    </>
  );
}
