import "../style/contact.css";

export default function Contact() {
  return (
    <>
      <div className="mother-container-about">
        <div className="title">
          <h1 style={{ fontSize: 50, textAlign: "center" }}>
            Thanks for stopping by!
          </h1>
        </div>
        <h2
          style={{
            textAlign: "center",
            marginTop: 0,
            color: "rgb(0,0,0,0.5)",
          }}
        >
          You can contact me via:
        </h2>

        <div className="background">
          <div className="contact-info-container">
            <div className="card-small">
              <div className="email-logo">
                <img height="100%" width="100%" />
              </div>
              <p>lewis.woods16@outlook.com</p>
            </div>
            <div className="card-small">
              <div className="phone-logo">
                <img height="100%" width="100%" />
              </div>
              <p>07896067711</p>
            </div>
          </div>
        </div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            aligntItems: "center",
            height: 30,
            color: "rgb(0,0,0,0.5)",
          }}
        >
          -- AND --
        </h2>
        <div className="contact-info-container-two">
          <div className="linked-in-logo">
            <img height="100%" width="100%" />
          </div>
          <div className="github-logo">
            <img height="100%" width="100%" />
          </div>
        </div>
      </div>
    </>
  );
}
