import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg"
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div className="header d-flex">
        <div className="logo">
          <Link to="/"><img src={Logo} alt="logo"/></Link>
        </div>
        <nav className="navbar d-flex ">
          <Link to="/" className="nav-link" >Home</Link>
          <Link to="/" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Menu</Link>
          <Link to="/reservations" className="nav-link">Reservations</Link>
          <Link to="/" className="nav-link">Order online</Link>
          <Link to="/" className="nav-link">Login</Link>
      </nav>
    </div>
  );
}

export default Navbar;