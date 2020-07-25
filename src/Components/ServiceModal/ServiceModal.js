import React from 'react'

import "./ServiceModal.sass"

const ServiceModal = ( {handleClose, show, title, img, body} ) => {
  const showHideClassName = show ? "Modal Modal__showModal" : "Modal Modal__hideModal"
  const brBody = <p className="Modal__contentBody">{body.split('\n\n').map((item, idx) => {return (<span key={idx} className="Modal__span">{item}<br /><br /></span>)})}</p>
  const ulBody = <div className="Modal__contentBody">
      <p>You Need A VERSITILE MC! Here is a list of the many ways you can use our services and we hope you will!</p>
      <ul className="Modal__list">
        <li className="Modal__listItem">Awards Shows</li>
        <li className="Modal__listItem">Backstage Announcing</li>
        <li className="Modal__listItem">Birthday Parties & Celebrations</li>
        <li className="Modal__listItem">Entertainment Showcases</li>
        <li className="Modal__listItem">Festivals & Community Events</li>
        <li className="Modal__listItem">Live & Recorded Interviews</li>
        <li className="Modal__listItem">On-Camera Testimonials</li>
        <li className="Modal__listItem">Panel Discussions/Facilitator</li>
        <li className="Modal__listItem">Radio Segments & Commercials</li>
        <li className="Modal__listItem">Religious Ceremonies & Events</li>
        <li className="Modal__listItem">Sports Team Announcements</li>
        <li className="Modal__listItem">Trade Shows</li>
        <li className="Modal__listItem">Vendor Spotlights</li>
        <li className="Modal__listItem">Virtual Meetings</li>
        <li className="Modal__listItem">Voice-Over Work</li>
      </ul>
  </div>
  const modalBody = body.includes("VERSITILE") ? ulBody : brBody

  return (
    <div className={showHideClassName} onClick={handleClose}>
      <div className="Modal__body">
        <button className="Modal__close" onClick={handleClose}>
          <i class="far fa-times"></i>
        </button>
        <div className="Modal__imageContaner">
          <img src={img} alt={title} className="Modal__image"/>
        </div>
        <div className="Modal__content">
          <h1 className="Modal__title">
            {title}
          </h1>
          {modalBody}
        </div>
      </div>
    </div>
  )
}

export default ServiceModal