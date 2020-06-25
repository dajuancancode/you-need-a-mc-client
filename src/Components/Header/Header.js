import React from 'react'
import styles from "./Header.module.sass"

import Navbar from "../Navbar/Navbar"

import mic from "../../assets/Mic.svg"



const Header = ({id}) => {

  return (
    <header className={styles.Header} id={id}>
      <div className={styles.Header__background}></div>
      <Navbar />
      <div className={styles.Header__content}>
        <h1 className={styles.Header__heading}>You Need <span className={styles.Header__span} id="spanText">A Skilled</span> MC</h1>
        <p className={styles.Header__info}>Allow us to make your event amazing</p>
      </div>
      <div className={styles.Header__imgContainer}>
        <img src={mic} alt="Microphone"  className={styles.Header__img}/>
      </div>
    </header>
  )
}

export default Header