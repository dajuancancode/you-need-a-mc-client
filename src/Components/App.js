import React from 'react';

import Header from "./Header/Header"
import Services from "./Services/Services"
import About from "./About/About"
import Work from "./Work/Work"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"

import styles from "./App.module.sass"


function App() {
  return (
    <div className={styles.App}>
      <Header  id="home"/>
      <Services id="services"/>
      <About id="about"/>
      <Work id="work"/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
}

export default App;
