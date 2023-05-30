import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
          <Navbar/>
          <Hero/>
          <Specials/>
          <Reviews/>
          <Footer/>
        </>
    )
}
export default Home