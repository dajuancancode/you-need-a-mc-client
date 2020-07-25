import React from 'react'

import styles from "./Card.module.sass"

const Card = ({image, title, body}) => {
  return(
    <div className={styles.Card}>
      <div className={styles.Card__imgContainer}>
        <img className={styles.Card__img} src={image} alt={title} />
      </div>
      <div className={styles.Card__content}>
        <h2 className={styles.Card__heading}>{title}</h2>
        <p className={styles.Card__body}>{body}</p>
      </div>
    </div>
  )
}

export default Card