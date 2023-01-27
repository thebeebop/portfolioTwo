import "../../style/projects-style/salford-devils.css";
import "../../style/projects-style/northcoders-news.css";
import { useState, useRef, useEffect } from "react";
import { Element, scroller } from "react-scroll";

export default function SalfordDevils() {
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
            <img height="100%" alt="repeating video of app in use" />
            <div className="button-container">
              <div className="github-container">
                <img className="github-img" alt="" />
              </div>
            </div>
          </div>
          <div className="title-container">
            <h1 className="main-title">Salford Red Devils</h1>
            <p>
              A short 30 second animation created for the Salford Red Devil's
              social media platforms to promote the launch of their new logo.
            </p>
          </div>
        </header>
        <div className="container">
          <section className="technologies-used">
            <h2>Tech Stack:</h2>
            <div className="grid-container">
              <div className="mock-image">After Effects</div>
              <div className="mock-image">Illustrator</div>
              <div className="mock-image">Premier Pro</div>
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
              <li>
                Deliver a 30 second animation to help support the revealing of
                the Salford Red Devils' new club logo, in less than 3 weeks.
              </li>
            </ul>
          </section>

          <section className="development">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>
              Development Proces:
            </h1>
            <p style={{ marginBottom: 50 }}>
              During the final year of my university studies, in the midst of a
              global pandemic, I had the opportunity to work on a project for
              the Salford Red Devils.
            </p>
            <h2 style={{ marginBottom: 10, fontSize: 20 }}>
              Meeting with the Client
            </h2>
            <p style={{ marginBottom: 50 }}>
              I met with chairman and managing director at the Salford Red
              Devils, Paul King and others from his team. This was done
              virtually via Zoom as social restrictions were still in place.
              <br></br>
              <br></br>
              They wanted some extra content to post on their socials to help
              support the revealing of their newly designed club logo. They were
              specifically looking for video content, so I proposed making a 2D
              animation.
              <br></br>
              <br></br>Although I had some experience in using After Effects, I
              had never before created an animation no longer than 5 seconds.
              Luckily, they did not know this and so gave me the okay to go
              ahead with the project.
            </p>

            <h2 style={{ marginBottom: 10, fontSize: 20 }}>Story Boards</h2>
            <p style={{ marginBottom: 50 }}>
              At this stage of the project I had a rough idea of how the
              animation was going to play out. I had a story board created and
              with the blessing of the Salford Devils team, I could begin
              working on the animation.
            </p>

            <div className="main-image-two"></div>
            <div className="main-image-two"></div>
            <div className="main-image-two"></div>

            <h2 style={{ marginBottom: 10, fontSize: 20, marginTop: 40 }}>
              The last minute trident idea
            </h2>
            <p style={{ marginBottom: 50 }}>
              During talks with the Salford Red Devils' team, there was an
              emphasis on the significance of the devil's trident. It was an
              important symbol to the club, so I was desperate to find a way to
              include it into the animation.
              <br></br>
              <br></br>
              After many rough sketches I finally found an idea that could work.
              The trident would be used as the foundation for which the club's
              new logo would be constructed on. This was also a nice visual
              metaphor of bridging the old traditons of the club with the newest
              of its conventions.
            </p>
            <div className="main-image-two"></div>
            <div className="main-image-two"></div>
            <div className="main-image-two"></div>
            <h2 style={{ marginBottom: 10, fontSize: 20, marginTop: 40 }}>
              Illustrations
            </h2>
            <p style={{ marginBottom: 50 }}>
              Adobe Illustrator was an effective tool that I utilised many times
              during this project. I used it to help me deconsruct the club's
              logo, especially the devil's face, into seperate moveable parts.
              This was important as it could allow me to manipulate the
              individual parts as needed when using after effects.
            </p>
            <div className="main-image-two"></div>
            <h2 style={{ marginBottom: 10, fontSize: 20, marginTop: 40 }}>
              Animations
            </h2>
            <p style={{ marginBottom: 50 }}>
              After Effects was used for almost all of the heavy lifting on this
              project. I found it to be an incredibly powerful tool, providing
              me with a variety of different methods for tackling this project.
              <br></br>
              <br></br>
              The main animation sequences were developed in isolated
              compositions. I relied on my prior experience in the use of
              keyframes and the scale, position, rotation and opacity
              properties. However, regarding the special effects used such as
              the fire, wind and lightning effects, I utilised a 2D effects
              library which I dowloaded from the internet.
            </p>
            <div className="main-image-two"></div>

            <h2 style={{ marginBottom: 10, fontSize: 20, marginTop: 40 }}>
              Putting it all together
            </h2>
            <p style={{ marginBottom: 50 }}>
              As the animation sequences were created in seperate chunks, I used
              Premier Pro to stitch the sequences together to create one
              cohesive animation.
            </p>
            <div className="main-image-two"></div>

            <h2 style={{ marginBottom: 10, fontSize: 20, marginTop: 40 }}>
              Sound Effects
            </h2>
            <p style={{ marginBottom: 50 }}>
              The sound design was created using Premier Pro. Most of the sound
              effects were sourced from a free online sound effects library.
              Some of the sounds inlcuding those of the crowd chants were
              provided by the Salford Red Devils.
            </p>
            <div className="main-image-two"></div>
          </section>

          <section className="challenges">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Challenges:</h1>
            <p style={{ marginBottom: 0 }}>
              Animating the devil's face proved to be a very technically tricky
              challenge. I wanted the face to look as organic as possible as to
              avoid that South Park character look.
            </p>
            <ul className="list">
              <li>
                <p>
                  <strong>SOLUTION:</strong> After much research I managed to
                  find a way to turn static 2D images into animated objects. I
                  used the pin tool in after effects which allowed me to divide
                  and section off parts of the image whilst using keyframes to
                  distort and manipulate the image as needed.
                </p>
              </li>
            </ul>
            <div className="main-image-two"></div>
          </section>

          <section className="result">
            <h1 style={{ marginBottom: 10, fontSize: 30 }}>Result:</h1>
            <p>
              A 30 second animation used across all Salford Red Devils media
              accounts, attracting 50K+ views on their twitter account.
            </p>
            <ul className="list">
              <li>
                Adobe Illustrator was used to deconstruct and recreate elements
                of the original club logo.
              </li>
              <li>
                After Effects was used to create the main animation sequences.
              </li>
              <li>
                Premier Pro was used to stitch it all the sequences together and
                to create the sound design.
              </li>
            </ul>
          </section>

          <section className="what-i-learnt">
            <h1 style={{ marginTop: 20, fontSize: 30 }}>What I learnt:</h1>
            <ul className="list">
              <li>
                How to take charge and manage all aspects of a project,
                independently.
              </li>
              <li>The ability to research and to solve complex problems.</li>
              <li>The ability to communicate and to negotiate with clients.</li>
              <li>The ability to work towards a deadline.</li>
              <li>Time management and organisational skills</li>
              <li>Self accountability</li>
              <li>
                How to create animations using after effects and premier pro.
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
