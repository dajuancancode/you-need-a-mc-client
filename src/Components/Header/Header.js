import React from "react";
import styles from "./Header.module.sass";

import Navbar from "../Navbar/Navbar";

const Header = ({ id }) => {
  const mic =
    "https://res.cloudinary.com/dajuancancode/image/upload/v1593460172/you-need-a-mc/Mic.svg";

  return (
    <header className={styles.Header} id={id}>
      <div className={styles.Header__background}></div>
      <Navbar />
      <div className={styles.Header__content}>
        <h1 className={styles.Header__heading}>
          You Need A{" "}
          <span className={styles.Header__span} id="spanText">
            Skilled
          </span>{" "}
          MC
        </h1>
        <p className={styles.Header__info}>
          Allow us to make your event amazing
        </p>
      </div>
      <div className={styles.Header__imgContainer}>
        <img src={mic} alt="Microphone" className={styles.Header__img} />
      </div>
    </header>
  );
};

export default Header;
