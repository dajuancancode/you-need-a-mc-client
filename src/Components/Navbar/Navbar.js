import React, {useState} from 'react';
import { Link } from 'react-scroll'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import styles from './Navbar.module.sass';

import logo from "../../assets/logo.svg";

const Navabar = props => {


  const [status, setStatus] = useState(false);

  const handleClick = () => {
    const navigation = document.querySelector("#navigation")
    navigation.style.visibility = !status ? "visible" : "hidden"
    setStatus(!status)
  }

  return (
    <nav className={styles.Navbar}>
      <img src={logo} className={styles.Navbar__logo} alt="You Need A MC logo" />
      <button className={styles.Navbar__menuButton}>
        <Burger className={styles.Navbar__menuIcon} isOpen={status} onClick={handleClick}/>
      </button>
      <div className={styles.Navbar__navigation} id="navigation">
        <ul className={styles.Navbar__nav}>
        <li className={styles.Navbar__navItem}>
            <Link className={styles.Navbar__navLink} activeClass="" to="home" spy={true} smooth={true} duration={500}>Home</Link>
          </li>
          <li className={styles.Navbar__navItem}>
            <Link className={styles.Navbar__navLink} activeClass="" to="services" spy={true} smooth={true} duration={500}>Services</Link>
          </li>
          <li className={styles.Navbar__navItem}>
            <Link className={styles.Navbar__navLink}  activeClass="" to="about" spy={true} smooth={true} duration={500}>About</Link>
          </li>
          <li className={styles.Navbar__navItem}>
            <Link className={styles.Navbar__navLink}  activeClass="" to="work" spy={true} smooth={true} duration={500}>Work</Link>
          </li>
          <li className={styles.Navbar__navItem}>
            <Link className={styles.Navbar__navLink}  activeClass="" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navabar