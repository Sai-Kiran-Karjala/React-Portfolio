import React from "react";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import SocialLinks from "./componets/SocialLinks";
import About from "./componets/About";
import Portfolio from "./componets/Portfolio";
import Experience from "./componets/Experience";
import Contact from "./componets/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks/>
    </div>
  );
}

export default App;
