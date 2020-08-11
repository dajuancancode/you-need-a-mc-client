import React from "react";

import styles from "./About.module.sass";

const About = ({ id }) => {
  const imageURL =
    "https://res.cloudinary.com/dajuancancode/image/upload/v1593460166/you-need-a-mc/Lawanda.jpg";
  return (
    <div className={styles.About} id={id}>
      <h1 className={styles.About__title}>About Us</h1>
      <div className={styles.About__bioBlock}>
        <div className={styles.About__paragraphBlock}>
          <p>
            You Need A MC has over 15 years of full-service event marketing
            experience through our parent company, Eventfullness Planning
            Specialists.
          </p>
          <p>
            As our event hosting arm, we provide a specialized skill under its
            own name that allows us to market our stage presence independently
            of our full scale event management services.
          </p>
          <p>
            We strive to deliver stellar event experiences every time through
            engaging event hosting.
          </p>
          <p>We know that a skilled MC:</p>
          <ul className={styles.About__benefits}>
            <li className={styles.About__benefit}>
              Makes your event more memorable
            </li>
            <li className={styles.About__benefit}>
              Keeps your audience engaged
            </li>
            <li className={styles.About__benefit}>
              Keeps your event on schedule
            </li>
            <li className={styles.About__benefit}>Reads the audience</li>
            <li className={styles.About__benefit}>Covers event mishaps</li>
          </ul>
          <p>Our goal is to make you and your event look good!</p>
        </div>
        <div className={styles.About__imgContainer}>
          <img
            className={styles.About__img}
            src={imageURL}
            alt="CEO Lawanda Will B Lawanda"
          />
        </div>
      </div>
      <h2 className={styles.About__subTitle}>Sizzle Reel</h2>
      <div className={styles.About__videoContainer}>
        <iframe
          title="Sizzle Reel"
          className={styles.About__video}
          src="https://www.youtube.com/embed/jd6iAAHsem0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
