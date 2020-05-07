import React from "react"
import { Player } from 'video-react'

import styles from "./About.module.sass"
import "../../../node_modules/video-react/dist/video-react.css"

import LaWanda from "../../assets/Lawanda.jpg"


const About = () => {

  const url = "https://res.cloudinary.com/dajuancancode/video/upload/v1588877303/you-need-a-mc/UNAMC_compressed.mp4"

  return (
    <div className={styles.About}>
      <h1 className={styles.About__title}>About Us</h1>
      <div className={styles.About__content}>
        <div className={styles.About__paragraphBlock}>
          <p>
            You Need A MC has over 15 years of full-service event marketing experience through our parent company, Eventfullness Planning Specialists. As our event hosting arm, we provide a specialized skill under its own name that allows us to market our stage presence independently of our full scale event management services.  
          </p>
          <p>
            We strive to deliver stellar event experiences every time through engaging event hosting. 
          </p>
          <p>
            We know that a skilled MC:
          </p>
          <ul className={styles.About__benefits}>
            <li>Makes your event more memorable</li>
            <li>Keeps your audience engaged</li>
            <li>Keeps your event on schedule</li>
            <li>Reads the audience</li>
            <li>Covers event mishaps</li>
          </ul>
          <p>
            Our goal is to make you and your event look good!
          </p>
        </div>
        <img className={styles.About__img} src={LaWanda} alt="CEO Lawanda Will B Lawanda"/>
      </div>
      <div className={styles.About__video}>
        <Player src={url} poster={LaWanda} playsInline/>
      </div>
    </div>
  )
}

export default About