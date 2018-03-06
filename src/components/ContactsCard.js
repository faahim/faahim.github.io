import React from 'react';
import '../styles/ContactsCard.css';
import Anime from 'react-anime';

function ContactsCard(props) {
  return(
    <Anime easing="easeInSine" scale={[1.3, 1]} opacity={[0, 1]} delay={300} duration={300}>
      <div className="card contacts-card" onClick={props.onClick('contact')}>
        <h2>Get in touch!</h2>
        <p>I love to meet new people from around the world! Let's disscuss about some projects idea or how cool your hometown is!</p>
      </div>
    </Anime>
  )
}

export default ContactsCard;