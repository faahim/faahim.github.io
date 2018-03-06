import React from 'react';
import '../styles/AboutCard.css';
import Anime from 'react-anime';

function AboutCard(props) {
  return(
    <Anime easing="easeInSine" opacity={[0, 1]} scale={[1.3, 1]} delay={100} duration={300}>
    <div className="card about-card" onClick={props.onClick('about')}>
      <p>Hi there!</p>
      <p>I'm Faahim. I love working on Front-End!</p>
      <p>Click to learn more about me. :)</p>
    </div>
    </Anime>
  )
}

export default AboutCard;