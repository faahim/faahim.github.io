import React from 'react';
import BackToHomeBtn from './BackToHomeBtn';

const WritingsPage = props => {
  return(
    <div className="writings-page">
      <BackToHomeBtn handleClick={props.returnBtn}/>
      <h1>My writings!</h1>
    </div>
  )
}

export default WritingsPage;