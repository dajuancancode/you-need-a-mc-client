import React from 'react'

import styles from "./Card.module.sass"

const Card = ({image, heading, body}) => {
  return(
    <div className={styles.Card}>
      <img className={styles.Card__img} src={image} alt={heading} />
      <div className={styles.Card__content}>
        <h2 className={styles.Card__heading}>{heading}</h2>
        <p className={styles.Card__body}>{body}</p>
      </div>
    </div>
  )
}

export default Card