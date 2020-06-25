import React, {useState} from 'react';
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import styles from './Navbar.module.sass';

import logo from "../../assets/logo.svg";

const Navabar = props => {


  const [status, setStatus] = useState(false);

  const handleClick = () => {
    const navigation = document.querySelector("#navigation")
    navigation.style.transform = !status ? "scale(1)" : "scale(0)"
    setStatus(!status)
  }

  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar__logoContainer}>
        <img src={logo} className={styles.Navbar__logo} alt="You Need A MC logo"/>
      </div>
      <button className={styles.Navbar__menuButton}>
        <Burger className={styles.Navbar__menuIcon} isOpen={status} onClick={handleClick}/>
      </button>
      <div className={styles.Navbar__navigation} id="navigation">
        <ul className={styles.Navbar__nav}>
        <li className={styles.Navbar__navItem}>
            <a className={styles.Navbar__navLink} href="#home">Home</a>
          </li>
          <li className={styles.Navbar__navItem}>
            <a className={styles.Navbar__navLink} href="#services">Services</a>
          </li>
          <li className={styles.Navbar__navItem}>
            <a className={styles.Navbar__navLink}  href="#about">About</a>
          </li>
          <li className={styles.Navbar__navItem}>
            <a className={styles.Navbar__navLink}  href="#work">Work</a>
          </li>
          <li className={styles.Navbar__navItem}>
            <a className={styles.Navbar__navLink}  href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navabar