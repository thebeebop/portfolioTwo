import "../../style/projects-style/hangman.css";
import { useState, useRef, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import hangmanImgOne from "./../../images/hangman-f2.png";
import hangmanImgTwo from "./../../images/hangman-f1.png";

export default function Hangman() {
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
              <a href="https://man-hang-app.netlify.app/" target="blank">
                <button className="button">View App</button>
              </a>
            </div>
          </div>
          <div className="title-container">
            <h1 className="main-title">Hangman</h1>
            <p>A recreation of the original hangman as a web application.</p>
          </div>
        </header>
        <div className="container">
          <section className="technologies-used">
            <h2>Tech Stack:</h2>
            <div className="grid-container">
              <div className="mock-image">JS</div>
              <div className="mock-image">CSS3</div>
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
              <li>To become more familiar with the DOM.</li>
              <li>To better understand how to manipulate the DOM. </li>
              <li>
                To better understand how JavaScript is used to apply
                interactivity to web-pages.
              </li>
            </ul>
          </section>

          <section className="development">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Initial Stages:</h1>
            <p style={{ marginBottom: 50 }}>
              I used the VSCode plug-in: TLDraw to design, arrange and workout
              the component state tree. I used Trello and the Kanban method to
              help organise and track my progress as I separated tasks into
              individual tickets
            </p>
            <div className="main-image-two"></div>
            <div className="main-image-two"></div>
          </section>

          <section className="game-logic">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Game Logic:</h1>
            <p style={{ marginBottom: 0 }}>
              This game follows similar logic to that of the original hangman.
            </p>
            <ul className="list-numbers">
              <li>
                There are 3 categories to choose from: Films, Countries and
                Famous People.
              </li>
              <li>
                Within each category there are a total number of 18 words to
                guess in total.
              </li>
              <li>
                If the player manages to guess all 18 words without being hung,
                they win.
              </li>
              <li>
                With each new subsequent round the player is given a new word
                that is obscured from them.
              </li>
              <li>
                The player must reveal the word by guessing the correct letters,
                one at a time.
              </li>
              <li>
                The player has 10 lives, therefore, ten opportunities to guess
                the correct word.
              </li>
              <li>The player can risk 5 lives for a clue/hint.</li>
              <li>
                With each life lost, the hangman is drawn in incremental steps.
              </li>
              <li>
                When the players runs out of lives and the hangman is fully
                drawn, the game is lost.
              </li>
            </ul>
          </section>

          <section className="challenges">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Challenges:</h1>
            <p style={{ marginBottom: 50 }}>
              Tracking the inputted characters from the player, comparing them
              with the characters in the hidden word and then discerning between
              the right and wrong characters, whilst at the same time revealing
              correctly gussed characters to the player in real time was one of
              the more challenging aspects of this project.
            </p>
            <div className="main-image-two"></div>
            <p style={{ marginTop: 20 }}>
              <strong>Solution Part 1:</strong>
            </p>
            <ul className="list">
              <li>
                <p>
                  The inputted characters from the user were filtered through a
                  function that would take the input as one argument.
                </p>
              </li>
              <li>
                <p>
                  This inputted character was then checked against the
                  characters within the hidden word using the .includes array
                  method, which was stored as a global array variable.
                </p>
              </li>
              <li>
                <p>
                  If the character inputted by the player was gussed correctly,
                  this would be pushed to a global array variable that was
                  keeping track of the correctly gussed characters.
                </p>
              </li>
            </ul>
            <div className="main-image-two">
              <img src={hangmanImgOne} height="100%" width="100%" alt="" />
            </div>

            <p style={{ marginTop: 20 }}>
              <strong>Solution Part 2:</strong>
            </p>
            <ul className="list">
              <li>
                <p>
                  A second function handled the functionality that would reveal
                  a correctly gussed character to the player. If a player had
                  gussed correctly, the game would have to reconstruct the
                  obscured word to now include that new character.
                </p>
              </li>
              <li>
                <p>
                  A .forEach method was used that would iterate through the
                  characters of the hidden word. This method would use
                  conditional statements to then check each character of the
                  hidden word array and compare them with the global array that
                  was keeping track of the correctly gussed characters.
                </p>
              </li>
              <li>
                <p>
                  If a correctly gussed character was present, this would then
                  replace all obscured charaters '-' in the hidden word array
                  with the correctly guessed characters.
                </p>
              </li>
            </ul>
            <div className="main-image-two">
              <img src={hangmanImgTwo} height="100%" width="100%" alt="" />
            </div>
          </section>

          <section className="hangman-illustration">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Illustration</h1>
            <p style={{ marginBottom: 50 }}>
              I used Adobe Illustrator to create the hangman illustration. I
              then seperated this illustration into 10 unique layers, allowing
              the layers to be stacked on top of eachother.
            </p>
            <div className="main-image-two"></div>
          </section>

          <section className="result">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Result:</h1>
            <p>
              A fully functioning game of Hangman, built with vanilla JavaScript
              and vanilla CSS.
            </p>
            <ul className="list">
              <li>
                HTML5 and CSS3 were used to build and style the application.
              </li>
              <li>JavScript was used to build and manage the game logic.</li>
            </ul>
          </section>

          <section className="what-i-learnt">
            <h1 style={{ marginTop: 20, fontSize: 30 }}>What I learnt:</h1>
            <ul className="list">
              <li>How to plan and make use of a state-component tree.</li>
              <li>
                How to handle state and pass props to update state variables.
              </li>
              <li>How to use useEffect to update state values in real time.</li>
              <li>How to better make use of JavaScript’s Math object.</li>
              <li>
                Understanding the difference between stateful and stateless
                components.
              </li>
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
