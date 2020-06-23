import React from 'react';
import { Element } from 'react-scroll'

import Header from "./Header/Header"
import Services from "./Services/Services"
import About from "./About/About"
import Work from "./Work/Work"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"



function App() {
  return (
    <>
      <Element name="home">
        <Header />
      </Element>
      <Element name="services">
        <Services/>
      </Element>
      <Element name="about">
      <About/>
      </Element>
      <Element name="work">
        <Work/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
      <Footer/>
    </>
  );
}

export default App;
