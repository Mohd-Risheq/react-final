import { NavLink } from 'react-router-dom'
import heroImage from "../images/restauranfood.jpg"
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='bg'>
      <div className='container'>
        <div className='left-section'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
        </div>
        <div className='right-section'>
          <div className='image-box'>
            <img src={heroImage} alt='Hero Image'/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;