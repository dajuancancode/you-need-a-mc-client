import React from 'react'
import styles from "./Header.module.sass"

import Navbar from "../Navbar/Navbar"

import mic from "../../assets/Mic.svg"



const Header = () => {

  return (
    <header className={styles.Header}>
      <div className={styles.Header__background}></div>
      <Navbar />
      <div className={styles.Header__content}>
        <h1 className={styles.Header__heading}>You Need <span className={styles.Header__span} id="spanText">A Skilled</span> MC</h1>
        <p className={styles.Header__info}>Allow us to make your event amazing</p>
        <div className={styles.Header__btnGroup}>
          <button className={[styles.Header__btn, styles["Header__btn--attn"]].join(" ")}>Contact Us</button>
          <button className={styles.Header__btn}>View Work</button>
        </div>
      </div>
      <div className={styles.Header__imgContainer}>
        <img src={mic} alt="Microphone"  className={styles.Header__img}/>
      </div>
    </header>
  )
}

export default Header