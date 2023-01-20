export default function Header() {
  return (
    <>
      <nav style={{ height: 70, width: "100%" }}>
        <ul
          style={{
            height: "100%",
            fontFamily: "Lato",
            fontWeight: "100",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            padding: 20,
            color: "white",
          }}
        >
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
          <li>Linkedin</li>
        </ul>
      </nav>
    </>
  );
}
