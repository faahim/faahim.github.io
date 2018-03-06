import React from 'react';
import Anime from 'react-anime';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/WritingsPage.css';

const WritingsPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="writings-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <div className="page-content">
            <h1>I love to write about my experiences!</h1>
            <p>But thats quite long! So, I like to use Faahim.</p>
          </div>
      </div>
    </Anime>
  )
}

export default WritingsPage;