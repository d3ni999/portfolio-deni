import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioList from "./components/PortfolioList";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="page-top">


     <Navbar/>
     <Hero/>
     <PortfolioList/>
    <About/>
    <Contact/>

    </div>
  );
}

export default App;
