import "../../style/projects-style/weather-widget.css";
import { useState, useRef, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import caluclateTimeImg from "../../images/calculateTime.png";

export default function WeatherWidget() {
  const [bool, setBool] = useState(false);
  const [reading, setReading] = useState("Continue Reading");
  const targetRef = useRef(null);

  useEffect(() => {
    if (targetRef.current !== null) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [bool, targetRef]);

  return (
    <>
      <Element name="top"></Element>
      <div className="mother-container">
        <header className="header">
          <div className="main-image">
            <div className="black-banner-container">
              <div className="black-banner"></div>
            </div>
            <img height="100%" alt="repeating video of app in use" />
            <div className="button-container">
              <div className="github-container">
                <img className="github-img" alt="" />
              </div>

              <a
                href="https://weather-application-1.netlify.app/"
                target="blank"
              >
                <button className="button">View App</button>
              </a>
            </div>
          </div>
          <div className="title-container">
            <h1 className="main-title">Weather widget</h1>
            <p>
              A fully responsive web app built with React using the
              OpenWeatherMap's API Onecall 3.0.
            </p>
          </div>
        </header>
        <div className="container">
          <section className="technologies-used">
            <h2>Tech Stack:</h2>
            <div className="grid-container">
              <div className="mock-image">React</div>
              <div className="mock-image">CSS3</div>
              <div className="mock-image">MUI</div>
              <div className="mock-image">Axios</div>
            </div>
          </section>
          <div className="continue-reading">
            <p
              onClick={() => {
                setBool(!bool);
                if (reading === "Continue Reading") {
                  setReading("Close Reading");
                } else {
                  setReading("Continue Reading");
                }
              }}
            >
              {reading}
            </p>
          </div>
        </div>
        <div className={bool ? "visible-element" : "hidden-element"}>
          <section className="goal" ref={targetRef}>
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Goal:</h1>
            <ul className="list">
              <li>To become more familiar with the React framework.</li>
              <li>
                To gain experience in handling state and passing state between
                components as props.
              </li>
              <li>To gain experience working with an API.</li>
            </ul>
          </section>

          <section className="development">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Initial Stages:</h1>
            <p style={{ marginBottom: 50 }}>
              I used the design application Figma, to design the UI layout as
              well as to draw the state component tree. I used Trello and the
              Kanban method to help organise and track my progress as I
              separated tasks into individual tickets
            </p>
            <div className="main-image-two"></div>
            <div className="main-image-two"></div>
            <div className="main-image-two"></div>
          </section>

          <section className="github-section">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Github:</h1>
            <p style={{ marginBottom: 50 }}>
              I built new features for the app incrementally, using git for the
              verion control and making frequent commits to the repository
              stored on github.
            </p>
            <div className="main-image-two"></div>
          </section>

          <section className="dynamic-rendering">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>
              Day/night-time feature
            </h1>
            <p style={{ marginBottom: 50 }}>
              During the final stages of the app's creation, I wanted to
              challenge myself by creating a day/night-cycle function. This
              function would change the background image of the application,
              depending on what the current local time was of the specificed
              location.
            </p>
            <div className="main-image-two"></div>
            <div className="main-image-two"></div>
          </section>

          <section className="challenges">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Challenges:</h1>
            <p style={{ marginBottom: 0 }}>
              Renderring the correct background image based on the current local
              time proved to be very challenging.
            </p>
            <p style={{ marginTop: 20 }}>
              <strong>SOLUTION:</strong>
            </p>
            <ul className="list">
              <li>
                Using the current local time which was delivered by the API,
                create a set of conditions that would determine whether that
                location was covered in sun or not.
              </li>
              <li>
                Have CSS classes saved as variables that would update
                accordingly.{" "}
              </li>
            </ul>
            <div className="main-image-two">
              <img src={caluclateTimeImg} width="100%" />
            </div>
          </section>

          <section className="result">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Result:</h1>
            <p>A fully responsive web application built with React.</p>
            <ul className="list">
              <li>React was used to create the front-end architecture.</li>
              <li>The overall UI was styled with Vanilla CSS.</li>
              <li>
                The 'search-bar' component was imported from the MUI library.
              </li>
              <li>
                Axios was used to handle promise based requests to the
                OpenWeatherMap API.
              </li>
            </ul>
          </section>

          <section className="what-i-learnt">
            <h1 style={{ marginTop: 20, fontSize: 30 }}>What I learnt:</h1>
            <ul className="list">
              <li>Declaring, handling and updating various state.</li>
              <li>
                Using useEffect to make API calls and to update state variables.
              </li>
              <li>
                Handling props, sharing props between different components.
              </li>
              <li>
                Working with an API, using a promised based library to manage
                API calls.
              </li>
              <li>Error Handling.</li>
              <li>Creating UI elements using data from a JSON object.</li>
              <li>
                Understanding the difference between stateful and stateless
                components.
              </li>
              <li>Dynamic Rendering.</li>
            </ul>
            <p
              className="continue-reading"
              onClick={() => {
                scroller.scrollTo("top", { smooth: true });
              }}
            >
              Back to Top
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
