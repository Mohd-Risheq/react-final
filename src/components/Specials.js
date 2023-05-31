import { NavLink } from 'react-router-dom'
import '../styles/Specials.css'
import Card from './Card';

const Meals =[
  {
    getImageSrc: () => require("../images/greek salad.jpg"),
    title : "Greek Salad",
    description : "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price : "7.99",
  },
  {
    getImageSrc: () => require("../images/bruchetta.jpg"),
    title : "Bruschetta",
    description : "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
    price : "12.99",
  },
  {
    getImageSrc: () => require("../images/lemon dessert.jpg"),
    title : "Lemon Cake",
    description : "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price : "15.99",
  },
];

const Specials = () => {
  return (
    <div className='specials'>
      <div className='specials-header container'>
        <h1>Specials</h1>
        <NavLink to="/menu"><button className="btn">Online Menu</button></NavLink>
      </div>
      <div className='cards container'>
        {Meals.map((meal) => (
          <Card
            key={meal.title}
            image={meal.getImageSrc()}
            title={meal.title}
            price={meal.price}
            description={meal.description}
          />
        ))}
      </div>
    </div>
  );
}
export default Specials;
