import React from "react";

import Gallery from "../Gallery/Gallery";

import styles from "./Work.module.sass";

const Work = ({ id }) => {
  return (
    <div className={styles.Work} id={id}>
      <h1 className={styles.Work__title}>Work</h1>
      <div className={styles.Work__container}>
        <div className={styles.Work__videoContainer}>
          <iframe
            title="Artists Showcase"
            className={styles.Work__video}
            src="https://www.youtube.com/embed/XxA6v3dyIAQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            title="Panel"
            className={styles.Work__video}
            src="https://www.youtube.com/embed/Jmx8X33ZOvE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <Gallery />
      </div>
    </div>
  );
};

export default Work;
