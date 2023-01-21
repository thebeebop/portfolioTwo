import Header from "./header";
export default function Projects() {
  const projects = [
    { name: "Weather widget", type: "WEB APP", img: "" },
    { name: "Calculator", type: "WEB APP", img: "" },
    { name: "Hangman", type: "WEB APP", img: "" },
    { name: "Northcoders News", type: "WEB APP", img: "" },
    { name: "Salford Red Devils", type: "MOTION DESIGN", img: "" },
  ];
  return (
    <div>
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
