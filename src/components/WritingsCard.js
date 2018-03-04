import React from 'react';
import '../styles/WritingsCard.css';

function WritingsCard(props) {
  return(
    <div className="card writings-card" onClick={props.onClick('writings')}>
      <h2>My Writings</h2>
      <p>I love to writing about my experience. Check some of them out!</p>
    </div>
  )
}

export default WritingsCard;