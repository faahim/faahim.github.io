import React from 'react';
import Anime from 'react-anime';
import '../styles/AboutCard.css';

function AboutCard(props) {
  return(
    <Anime easing="easeInSine" opacity={[0, 1]} scale={props.scaleArr} delay={100} duration={300}>
      <div className="card about-card" onClick={props.onClick('about')}>
        <h2>I'm Faahim.</h2>
        <p>I'm a Front-End developer. Click for more.</p>
      </div>
    </Anime>
  )
}

export default AboutCard;