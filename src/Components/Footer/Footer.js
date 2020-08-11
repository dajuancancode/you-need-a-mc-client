import React from "react";

import styles from "./Footer.module.sass";

const Footer = (props) => {
  return (
    <div className={styles.Footer}>
      <p className={styles.Footer__copyright}>&copy; 2020 You Need A MC</p>
      <ul className={styles.Footer__socialList}>
        <li className={styles.Footer__socialItem}>
          <a
            href="https://www.facebook.com/YouNeedAMC/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.Footer__socialLink}
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li className={styles.Footer__socialItem}>
          <a
            href="https://www.instagram.com/youneedamc/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.Footer__socialLink}
          >
            <i className="fab fa-instagram-square"></i>
          </a>
        </li>
        <li className={styles.Footer__socialItem}>
          <a
            href="https://www.linkedin.com/in/lawandaharris/"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.Footer__socialLink}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className={styles.Footer__socialItem}>
          <a
            href="https://www.youtube.com/channel/UCTU_wiZVbgA6o7GoDeNsZ4Q"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.Footer__socialLink}
          >
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
