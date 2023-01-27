import profilePic from "../images/profile pic.jpg";
import "../style/about.css";
import { useState, useRef, useEffect } from "react";
import { Element, scroller } from "react-scroll";
// Could do with a back to top functionality
export default function About() {
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
        <section className="container-top">
          <div className="intro">
            <div className="profile-pic">
              <img src={profilePic} alt="" className="image" />
            </div>
            <h1 className="about-header">
              I'm a Designer turned Software Developer.
            </h1>
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

        <div className={bool ? "visible-element" : "hidden-element"}>
          <section className="brief-history-section" ref={targetRef}>
            <Element />
            <h1 style={{ fontSize: 45, marginBottom: 30 }}>Brief History:</h1>
            <div className="history-section-logos"></div>
            <p style={{ marginBottom: 30, width: "100%", textAlign: "center" }}>
              I studied Graphic Design for 4+ years, specialising in
              Illustration, Design Layout and Motion Design. Graduating at the
              end of 2021, I decided that I wanted to pursue a different career
              path and started to learn Software Development.
            </p>
            <div className="arrow"></div>
            <div className="history-section-logos"></div>
            <p style={{ marginBottom: 30, width: "100%", textAlign: "center" }}>
              After a few months of self-learning, I enrolled onto a 14-week
              full-stack developer bootcamp with Northcoders. On this course I
              learnt the fundamentals of JavaScript, built my own API and
              created a social news web application with React, HTML & CSS.
            </p>
            <div className="arrow"></div>
            <div className="history-section-logos"></div>
            <p style={{ marginBottom: 30, width: "100%", textAlign: "center" }}>
              After graduating from the Northcoders' bootcamp, I've continued to
              learn and to challenge my knowledge by undertaking my own
              self-directed projects.
            </p>
          </section>

          <section className="tech-skills-section">
            <h1 style={{ fontSize: 45, marginBottom: 30 }}>Tech Skills:</h1>
            <div className="tech-skills-grid">
              <div className="tech-image" id="js">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="html5">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="css3">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="react">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="node">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="git">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="firebase">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="AE">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="AI">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="PS">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="premier pro">
                <img height="100%" width="100%" />
              </div>
              <div className="tech-image" id="ID">
                <img height="100%" width="100%" />
              </div>
            </div>
          </section>

          <section className="vanity-section">
            <h1 style={{ fontSize: 45, marginBottom: 30 }}>Personal Stuff:</h1>
            <div className="vanity-grid">
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img height="100%" width="100%" />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I enjoy reading, especially sci-fi.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img height="100%" width="100%" />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I play (some) classical guitar.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img height="100%" width="100%" />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I used to be vegan.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img height="100%" width="100%" />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I prefer dogs.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img height="100%" width="100%" />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I hate stress.
                </p>
              </div>
              <div className="vanity-images">
                <div className="vanity-logos">
                  <img height="100%" width="100%" />
                </div>
                <p style={{ width: "100%", textAlign: "center" }}>
                  I like health.
                </p>
              </div>
            </div>
          </section>

          <section className="books-read-section">
            <h1 style={{ fontSize: 45, marginBottom: 30 }}>Favourite books:</h1>

            <div className="books-grid">
              <div className="book-container" id="dune">
                <div className="books">
                  <img height="100%" width="100%" />
                </div>
              </div>
              <div className="book-container" id="dark tower">
                <div className="books">
                  <img height="100%" width="100%" />
                </div>
              </div>
              <div className="book-container" id="sapiens">
                <div className="books">
                  <img height="100%" width="100%" />
                </div>
              </div>
              <div className="book-container" id="deep work">
                <div className="books">
                  <img height="100%" width="100%" />
                </div>
              </div>
              <div className="book-container" id="scott adams">
                <div className="books">
                  <img height="100%" width="100%" />
                </div>
              </div>
              <div className="book-container" id="mandibles">
                <div className="books">
                  <img height="100%" width="100%" />
                </div>
              </div>
            </div>
          </section>

          <section className="books-reading-section">
            <h1 style={{ fontSize: 45, marginBottom: 30 }}>Reading atm:</h1>
            <div className="book-container-lonely">
              <div className="books-lonely">
                <img height="100%" width="100%" />
              </div>
            </div>
          </section>
          <p
            className="continue-reading"
            onClick={() => {
              scroller.scrollTo("top", { smooth: true });
            }}
          >
            Back to Top
          </p>
        </div>
      </div>
    </>
  );
}
