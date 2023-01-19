export default function Header() {
  return (
    <>
      <nav style={{ height: 70 }}>
        <ul
          style={{
            height: "100%",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            padding: 20,
            color: "white",
            backgroundColor: "black",
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
