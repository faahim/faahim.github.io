import React from 'react';
import { Svg1 } from './Svgs';
import '../styles/AboutCard.css';

function AboutCard(props) {
  return(
    <div className="card about-card">
      <h3>Hi there!</h3>
      <h1>I'm Faahim. I love working on Front-End!</h1>
      <p>Click to learn more about me. :)</p>
      <Svg1/>
    </div>
  )
}

export default AboutCard;