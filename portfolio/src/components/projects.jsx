import "../style/projects.css";
import { Link } from "react-router-dom";
export default function Projects() {
  const projects = [
    {
      name: "Weather widget",
      type: "WEB APP",
      img: "",
      path: "projects/weather-widget",
    },
    { name: "Hangman", type: "WEB APP", img: "", path: "projects/hangman" },
    {
      name: "Calculator",
      type: "WEB APP",
      img: "",
      path: "projects/calculator",
    },
    ,
    {
      name: "The Daily Dose (Northcoders News)",
      type: "WEB APP",
      img: "",
      path: "projects/northcoders-news",
    },
    { name: "Salford Red Devils", type: "MOTION DESIGN", img: "" },
  ];
  return (
    <>
      <div className="app">
        <div className="introduction">
          <h1 className="introduction-title">Hi! I'm Lewis.</h1>
          <p>
            I'm a Junior Front End Developer with experience <br></br> in
            JavaScript (ES6), React, HTML5 & CSS3.<br></br> With a background in
            Graphic Design, I have<br></br> a keen eye for styling and data
            visualisation.
          </p>
        </div>
        {projects.map((project, i) => {
          return (
            <Link
              to={project.path}
              style={{ textDecoration: "none", color: "black" }}
              key={i}
            >
              <div className="card">
                <h3 className="card-subtitle">{project.type}</h3>
                <h1 style={{ color: "black" }}>{project.name}</h1>
                <img src={project.img} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
