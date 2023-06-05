import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form"
import Footer from "../components/Footer"
import "../styles/Reservations.css"

const Reservations = () => {
    return (
        <>
          <Navbar/>
          <div className="reservations">
            <div className="film">
            <Form/>
            </div>
          </div>
          <Footer/>
        </>
    )
}
export default Reservations