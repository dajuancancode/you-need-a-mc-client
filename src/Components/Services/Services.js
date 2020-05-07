import React from 'react'

import Card from "../Card/Card"

import styles from "./Services.module.sass"

import meeting from "../../assets/meeting.svg"
import wedding from "../../assets/wedding.svg"
import product from "../../assets/product.svg"
import many from "../../assets/many_more.svg"

const Services = () => {
  const events = [
    {image: meeting, headding: "Meetings & Confrences", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit fermentum ligula sit amet consectetur."},
    {image: wedding, headding: "Weddings", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit fermentum ligula sit amet consectetur."},
    {image: product, headding: "Book & Product Launches", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit fermentum ligula sit amet consectetur."},
    {image: many, headding: "Many More", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit fermentum ligula sit amet consectetur."},
  ]

  return (
    <div className={styles.Services}>
      <h1 className={styles.Services__title}>Services</h1>
      <div className={styles.Services__cardsContainer}>
        {events && events.map((event, index) => <Card image={event.image} heading={event.headding} body={event.body} key={index}/>)}
      </div>
    </div>
  )
}

export default Services