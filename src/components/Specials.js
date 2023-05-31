import { NavLink } from 'react-router-dom'
import '../styles/Specials.css'

const Specials = () => {
  return (
    <div className='container'>
    <div className='specials-header'>
      <h1>Specials</h1>
      <NavLink to="/menu"><button className="btn">Online Menu</button></NavLink>
    </div>
    </div>
  );
}
export default Specials;
