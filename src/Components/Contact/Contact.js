
import React from 'react'
import ContactForm from '../ContactForm/ContactForm'

import styles from './Contact.module.sass'


const Contact = ({id}) => {
  return(
    <div className={styles.Contact} id={id}>
      <h1 className={styles.Contact__title}>Contact</h1>
      <ContactForm />
    </div>
  )
}

export default Contact