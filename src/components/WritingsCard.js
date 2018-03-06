import React from 'react';
import '../styles/WritingsCard.css';
import Anime from 'react-anime';

function WritingsCard(props) {
  return(
    <Anime easing="easeInSine" scale={[1.3, 1]} opacity={[0, 1]} delay={700} duration={300}>
      <div className="card writings-card" onClick={props.onClick('writings')}>
        <h2>My Writings</h2>
        <p>I love to writing about my experience. Check some of them out!</p>
      </div>
    </Anime>
  )
}

export default WritingsCard;