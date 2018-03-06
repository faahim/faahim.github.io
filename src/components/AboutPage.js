import React from 'react';
import Anime from 'react-anime';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/AboutPage.css';

const AboutPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="about-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <div className="page-content">
            <h1>Hello! My name is Afiur Rahman Fahim.</h1>
            <p>But thats quite long! So, I like to use Faahim.</p>
          </div>
      </div>
    </Anime>
  )
}

export default AboutPage;