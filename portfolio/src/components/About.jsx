import profilePic from "../images/profile pic.jpg";
export default function About() {
  return (
    <>
      <div className="profile-pic">
        <img src={profilePic} alt="" className="image" />
      </div>
      <h1 className="about-header">Designer turned Software Developer.</h1>
      <section className="brief-history-section">
        <div className="mock-image"></div>
        <p>
          I studied Graphic Design for 4+ years, specialising in Illustration,
          Design Layout and Motion Design. Graduating at the end of 2021, I
          decided that I wanted to pursue a different career path and started to
          learn Software Development.
        </p>
        <div className="arrow"></div>
        <div className="mock-image"></div>
        <p>
          After a few months of self-learning, I enrolled onto a 14-week
          full-stack developer bootcamp with Northcoders. On this course I
          learnt the fundamentals of JavaScript, built my own API and created a
          social news web application with React, HTML & CSS.
        </p>
        <div className="arrow"></div>
        <div className="mock-image"></div>
        <p>
          After graduating from the Northcoders' bootcamp, I've continued to
          learn and to challenge my knowledge by undertaking my own
          self-directed projects.
        </p>
      </section>

      <section className="tech-skills-section">
        <h1 className="tech-skills-header">Tech Skills:</h1>
        <div className="tech-skills-grid">
          <div className="mock-image">JS</div>
          <div className="mock-image">HTML5</div>
          <div className="mock-image">CSS3</div>
          <div className="mock-image">React</div>
          <div className="mock-image">Node</div>
          <div className="mock-image">Git</div>
          <div className="mock-image">Github</div>
          <div className="mock-image">Firebase</div>
          <div className="mock-image">AE</div>
          <div className="mock-image">AI</div>
          <div className="mock-image">PS</div>
          <div className="mock-image">ID</div>
        </div>
      </section>

      <section className="vanity-section">
        <h1 className="about-header">Extra Vanity:</h1>
        <div className="vanity-grid">
          <div className="mock-image-two"></div>
          <div className="mock-image-two"></div>
          <div className="mock-image-two"></div>
          <div className="mock-image-two"></div>
          <div className="mock-image-two"></div>
          <div className="mock-image-two"></div>
        </div>
      </section>

      <section className="books-read-section">
        <h1 className="about-header">Books I can read (favourite books):</h1>
        <div className="vanity-grid">
          <div className="mock-image-two">Dune</div>
          <div className="mock-image-two">The Dark Tower series</div>
          <div className="mock-image-two">Sapiens</div>
          <div className="mock-image-two">Deep Work</div>
          <div className="mock-image-two">Scott Adams</div>
          <div className="mock-image-two">The Mandibles</div>
        </div>
      </section>

      <section className="books-reading-section">
        <h1 className="about-header">Currently Reading:</h1>
        <div className="mock-image-three">Hyperion</div>
      </section>
    </>
  );
}
