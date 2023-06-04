import Logo from '../images/Logo.svg'
import "../styles/Footer.css"
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-img">
        <img src={Logo} alt='logo' />
      </div>
      <div className='footer-links'>
        <ul>
          <h3>Navigation</h3>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order online</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
      <div className='footer-contact'>
        <ul>
          <h3>Contact</h3>
          <li>+96279990908</li>
          <li><a href='mailto:test@littlelemon.com'>test@littlelemon.com</a></li>
          <li>Chicago</li>
        </ul>
      </div>
      <div className='footer-social'>
        <ul>
          <h3>Social Media</h3>
          <li><a href='#'>Facebook</a></li>
          <li><a href='#'>Instagram</a></li>
          <li><a href='#'>Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;