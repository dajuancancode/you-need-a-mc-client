import React from 'react'

import Card from "../Card/Card"

import styles from "./Services.module.sass"

const Services = ({id}) => {

  const meeting = "https://res.cloudinary.com/dajuancancode/image/upload/v1593460166/you-need-a-mc/meeting.svg"
  const wedding = "https://res.cloudinary.com/dajuancancode/image/upload/v1593460169/you-need-a-mc/wedding.svg"
  const product = "https://res.cloudinary.com/dajuancancode/image/upload/v1593460167/you-need-a-mc/product.svg"
  const many = "https://res.cloudinary.com/dajuancancode/image/upload/v1593460166/you-need-a-mc/many_more.svg"

  const events = [
    {image: meeting, headding: "Meetings & Confrences", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit fermentum ligula sit amet consectetur."},
    {image: wedding, headding: "Weddings", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit fermentum ligula sit amet consectetur."},
    {image: product, headding: "Book & Product Launches", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit fermentum ligula sit amet consectetur."},
    {image: many, headding: "Many More", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit fermentum ligula sit amet consectetur."},
  ]

  return (
    <div className={styles.Services} id={id}>
      <h1 className={styles.Services__title}>Services</h1>
      <div className={styles.Services__cardsContainer}>
        {events && events.map((event, index) => <Card image={event.image} heading={event.headding} body={event.body} key={index}/>)}
      </div>
    </div>
  )
}

export default Services