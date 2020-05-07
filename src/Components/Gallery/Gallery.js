import React, { useState } from 'react'
import styles from "./Gallery.module.sass"

const GalleryModal = ({isopen, onClick, name, src, picture}) => {
  if(isopen === false) return null

  return(
    <div isopen={isopen} className={styles.Modal} onClick={onClick} name={name}>
      <div className={styles.Modal__body}>
        <a className={styles.Modal__close} href="/" onClick={onClick}><span className="far fa-times"></span></a>
        <img src={src}  alt={picture}/>
        <p>Let us see if this will work, because I do not know, but I think it'll be interesting to see if it does lols</p>
      </div>
    </div>
  )
}

const Gallery = () => {
  const [modal, showModal] = useState(false)
  const [url, setUrl] = useState("")

  const openModal = url => {
    showModal(true)
    setUrl(url)
  }

  const closeModal = () => {
    showModal(false)
    setUrl("")
  }

  let imgUrls = [
    'https://source.unsplash.com/3Z70SDuYs5g/800x600',
    'https://source.unsplash.com/01vFmYAOqQ0/800x600',
    'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
    'https://source.unsplash.com/t20pc32VbrU/800x600',
    'https://source.unsplash.com/pHANr-CpbYM/800x600',
    'https://source.unsplash.com/3PmwYw2uErY/800x600',
    'https://source.unsplash.com/uOi3lg8fGl4/800x600',
    'https://source.unsplash.com/CwkiN6_qpDI/800x600',
    'https://source.unsplash.com/9O1oQ9SzQZQ/800x600'
  ];

  return (
    <div className={styles.Gallery}>
      {imgUrls && imgUrls.map((img, index) => (
        <div className={styles.Gallery__card} key={index}>
          <img src={img} alt={`number ${index}`}  className={styles.Gallery__img}/>
          <span className={[styles.Gallery__open, "far fa-expand-alt"].join(" ")} onClick={() => openModal(img)}></span>
        </div>
      ))}
      <GalleryModal isopen={modal} onClick={closeModal} src={url} picture={"Hello"} />
    </div>
  )
}

export default Gallery