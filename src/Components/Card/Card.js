import React from "react";

import styles from "./Card.module.sass";

const Card = ({ image, title, body, handleClick }) => {
  const summary = body.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <div className={styles.Card}>
      <div className={styles.Card__imgContainer}>
        <img className={styles.Card__img} src={image} alt={title} />
      </div>
      <div className={styles.Card__content}>
        <h2 className={styles.Card__heading}>{title}</h2>
        <p className={styles.Card__body}>{summary}</p>
      </div>
      <button
        className={styles.Card__button}
        onClick={() => handleClick(image, title, body)}
      >
        Read More
      </button>
    </div>
  );
};

export default Card;
