import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
          <Header/>
          <Hero/>
          <Specials/>
          <Reviews/>
          <Footer/>
        </>
    )
}
export default Home