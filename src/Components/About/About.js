import React from "react"

import styles from "./About.module.sass"

import LaWanda from "../../assets/Lawanda.jpg"


const About = ({id}) => {

  const url = "https://res.cloudinary.com/dajuancancode/video/upload/v1588877303/you-need-a-mc/UNAMC_compressed.mp4"

  return (
    <div className={styles.About} id={id}>
      <h1 className={styles.About__title}>About Us</h1>
      <div className={styles.About__bioBlock}>
        <div className={styles.About__paragraphBlock}>
          <p>
            You Need A MC has over 15 years of full-service event marketing experience through our parent company, Eventfullness Planning Specialists.
          </p>
          <p>
            As our event hosting arm, we provide a specialized skill under its own name that allows us to market our stage presence independently of our full scale event management services.  
          </p>
          <p>
            We strive to deliver stellar event experiences every time through engaging event hosting. 
          </p>
          <p>
            We know that a skilled MC:
          </p>
          <ul className={styles.About__benefits}>
            <li className={styles.About__benefit}>Makes your event more memorable</li>
            <li className={styles.About__benefit}>Keeps your audience engaged</li>
            <li className={styles.About__benefit}>Keeps your event on schedule</li>
            <li className={styles.About__benefit}>Reads the audience</li>
            <li className={styles.About__benefit}>Covers event mishaps</li>
          </ul>
          <p>
            Our goal is to make you and your event look good!
          </p>
        </div>
        <div className={styles.About__imgContainer}>
          <img className={styles.About__img} src={LaWanda} alt="CEO Lawanda Will B Lawanda"/>
        </div>
      </div>
      <div className={styles.About__videoContainer}>
        <video controls className={styles.About__video} poster={LaWanda}>
          <source src={url} type="video/mp4"></source>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  )
}

export default About