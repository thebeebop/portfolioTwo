import "../style/contact.css";

export default function Contact() {
  return (
    <>
      <div className="app-two">
        <div>
          <h1 style={{ fontSize: 50, textAlign: "center" }}>
            Thanks for stopping by!
          </h1>
          <h2
            style={{
              textAlign: "center",
              marginTop: 10,
              color: "rgb(0,0,0,0.5)",
            }}
          >
            You can contact me via:
          </h2>
        </div>

        <div className="background">
          <div className="contact-info-container">
            <div className="card-small">Email</div>
            <div className="card-small">PhoneNumber</div>
          </div>
          <div className="contact-info-container-two">
            <div className="card-small">Li</div>
            <div className="card-small">Github</div>
          </div>
        </div>
      </div>
    </>
  );
}
