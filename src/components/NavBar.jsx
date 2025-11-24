export default function NavBar(props) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      backgroundColor: "#111",
      color: "white"
    }}>
      
      <h2>CLUB P1</h2>

      <ul style={{
        display: "flex",
        listStyle: "none",
        gap: "2rem",
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>POLERAS</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>POLERONES</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>OFERTAS</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>QUIENES SOMOS</a></li>
      </ul>
      {props.CartW}
    </nav>
  );
}
