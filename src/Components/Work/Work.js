import React from 'react'

import Gallery from "../Gallery/Gallery"

import styles from "./Work.module.sass"


const Work = ({id}) => {
  const videoUrl = "https://res.cloudinary.com/dajuancancode/video/upload/v1588877303/you-need-a-mc/UNAMC_compressed.mp4"
  const imageURL = "https://res.cloudinary.com/dajuancancode/image/upload/v1593460166/you-need-a-mc/Lawanda.jpg"

  return(
    <div className={styles.Work} id={id}>
      <h1 className={styles.Work__title}>Work</h1>
      <div className={styles.Work__container}>
        <div className={styles.Work__videoContainer}>
          <video controls className={styles.Work__video} poster={imageURL}>
            <source src={videoUrl} type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <Gallery />
      </div>
    </div>
  )
}

export default Work