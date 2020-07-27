import React, { useState } from 'react'

import Card from "../Card/Card"

import styles from "./Services.module.sass"

import ServiceModal from "../ServiceModal/ServiceModal"

import events from "../../util/services.js"

const Services = ({id}) => {

  const [modal, setModal] = useState({})

  
  const showModal= (image, title, body) => {
    setModal({
      image: image,
      title: title,
      body: body,
      visibility: true
    })
  }

  const hideModal = ( ) => {
    setModal({})
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
      <ServiceModal img={modal && modal.image} title={modal && modal.title} body={modal && modal.body} show={modal && modal.visibility} handleClose={hideModal} />
    </div>
  )
}

export default Services