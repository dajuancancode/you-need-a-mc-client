import React, { useState } from 'react'

import Card from "../Card/Card"

import styles from "./Services.module.sass"

import ServiceModal from "../ServiceModal/ServiceModal"

import events from "../../util/services.js"

const Services = ({id}) => {

  const [modalVisibility, setModalVisibility] = useState(false)
  const [image, setImage] = useState("")
  const [title, settitle] = useState("")
  const [body, setBody] = useState("")

  
  const showModal= (image, title, body) => {
    setModalVisibility(true)
    setImage(image)
    settitle(title)
    setBody(body)
  }

  const hideModal = ( ) => {
    setModalVisibility(false)
    setImage("")
    settitle("")
    setBody("")
  }

  return (
    <div className={styles.Services} id={id}>
      <h1 className={styles.Services__title}>Services</h1>
      <div className={styles.Services__cardsContainer}>
        {events && events.map((event, index) => {
          return (
            <div className={styles.Services__cardContainer}>
              <Card image={event.image} title={event.title} body={event.body.split(" ").slice(0, 15).join(" ")+"..."} key={index}/>
              <button className={styles.Services__button} onClick={() => showModal(event.image, event.title, event.body)}>Read More</button>
            </div>
          )
        })}
      </div>
      <ServiceModal img={image} title={title} body={body} show={modalVisibility} handleClose={hideModal} />
    </div>
  )
}

export default Services