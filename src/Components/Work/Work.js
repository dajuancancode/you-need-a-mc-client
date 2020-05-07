import React from 'react'
import { Player } from 'video-react'

import Gallery from "../Gallery/Gallery"

import styles from "./Work.module.sass"
import "../../../node_modules/video-react/dist/video-react.css"

import LaWanda from "../../assets/Lawanda.jpg"


const Work = () => {

  const url = "https://res.cloudinary.com/dajuancancode/video/upload/v1588877303/you-need-a-mc/UNAMC_compressed.mp4"

  return(
    <div className={styles.Work}>
      <h1 className={styles.Work__title}>Work</h1>
      <div className={styles.Work__video}>
        <Player src={url} poster={LaWanda} playsInline/>
      </div>
      <Gallery />
    </div>
  )
}

export default Work