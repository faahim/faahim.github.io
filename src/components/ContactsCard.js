import React from 'react';
import '../styles/ContactsCard.css';
import Anime from 'react-anime';

function ContactsCard(props) {
  return(
    <Anime easing="easeInSine" scale={[0.7, 1]} opacity={[0, 1]} delay={300} duration={300}>
      <div className="card contacts-card" onClick={props.onClick('contact')}>
        <h2>Get in touch!</h2>
        <p>I'm friendly, Let's talk!</p>
      </div>
    </Anime>
  )
}

export default ContactsCard;