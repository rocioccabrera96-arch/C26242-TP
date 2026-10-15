import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src="/logo.png" alt="Logo de Pupa Store" className="logo-nav" />
          <span>Pupa Store</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};