import React from "react";
import '../styles/Card.css'
import { NavLink } from 'react-router-dom'
import {FaMotorcycle} from "react-icons/fa"

const Card =({image,title,price,description}) => {
    return (
      <div className="card">
        <div className="card-img">
        <img src={image} alt="food"/>
        </div>
        <div className="card-body">
        <div className="card-title">
          {title}
          <span>${price}</span>
        </div>
        <div className="card-desc">
            {description}
        </div>
        <div className="link">
        <NavLink to="/order">Order a delovery<span className="icon"><FaMotorcycle/></span></NavLink>
        </div>
        </div>
        </div>
    );
  }
  export default Card;