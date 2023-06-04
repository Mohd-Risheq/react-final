import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Aboutus from "./routes/Aboutus";
import Menu from "./routes/Menu";
import Reservations from "./routes/Reservations";
import Order from "./routes/Order";
import Login from "./routes/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element ={<Aboutus/>}/>
        <Route path="/menu" element ={<Menu/>}/>
        <Route path="/reservations" element ={<Reservations/>}/>
        <Route path="/order" element ={<Order/>}/>
        <Route path="/login" element ={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
