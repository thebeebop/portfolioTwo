import Header from "./header";
export default function Projects() {
  const projects = [
    { name: "Weather widget", type: "WEB APP", img: "" },
    { name: "Calculator", type: "WEB APP", img: "" },
    { name: "Hangman", type: "WEB APP", img: "" },
    { name: "Northcoders News", type: "WEB APP", img: "" },
    { name: "Salford Red Devils", type: "Motion Design", img: "" },
  ];
  return (
    <div>
      <div className="introduction">
        <h1 className="introduction-title">Hi! I'm Lewis.</h1>
        <p>
          A Junior Front End Developer with experience in JavaScript (ES6),
          React, HTML5 & CSS3 with a keen eye for styling and data
          visualisation.
        </p>
      </div>
      {projects.map((project, i) => {
        return (
          <div className="card" key={i}>
            <h3 className="card-subtitle">{project.type}</h3>
            <h1>{project.name}</h1>
            <img src={project.img} />
          </div>
        );
      })}
    </div>
  );
}
