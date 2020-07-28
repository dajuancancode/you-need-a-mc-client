import React, { useState } from "react";
import styles from "./Gallery.module.sass";

const GalleryModal = ({ isopen, onClick, name, src, picture }) => {
  if (isopen === false) return null;

  return (
    <div isopen={isopen} className={styles.Modal} onClick={onClick} name={name}>
      <div className={styles.Modal__body}>
        <img src={src} alt={picture} onClick={onClick} />
        <p>
          Let us see if this will work, because I do not know, but I think it'll
          be interesting to see if it does lols
        </p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [modal, showModal] = useState(false);
  const [url, setUrl] = useState("");

  const openModal = (url) => {
    showModal(true);
    setUrl(url);
  };

  const closeModal = () => {
    showModal(false);
    setUrl("");
  };

  let imgUrls = [
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event1.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event11.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event2.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event4.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event12.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event5.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event6.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event7.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event3.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event8.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event9.png",
    "https://res.cloudinary.com/dajuancancode/image/upload/v1595952601/you-need-a-mc/Event10.png",
  ];

  return (
    <div className={styles.Gallery}>
      {imgUrls &&
        imgUrls.map((img, index) => (
          <div
            className={[styles.Gallery__card, `Gallery__card--${index}`].join(
              " "
            )}
            key={index}
          >
            <img
              src={img}
              alt={`number ${index}`}
              className={styles.Gallery__img}
              onClick={() => openModal(img)}
            />
          </div>
        ))}
      <GalleryModal
        isopen={modal}
        onClick={closeModal}
        src={url}
        picture={"Hello"}
      />
    </div>
  );
};

export default Gallery;
