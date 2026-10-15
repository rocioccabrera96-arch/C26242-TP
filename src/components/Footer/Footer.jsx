import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p style={{ 
        textAlign: "center", 
        fontStyle: "italic", 
        margin: "1.5rem 0 1rem 0", 
        fontSize: "1.1rem" 
      }}>
        "Comprando" tu Michi ayudas a que más Michis puedan ser comprados 🐾
      </p>
      
      <nav>
        <ul className="nav-list">
          <li>Whatsapp</li>
          <li>Instagram</li>
        </ul>
      </nav>
    </footer>
  );
};