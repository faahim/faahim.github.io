import React from 'react';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/AboutPage.css';

const AboutPage = props => {
  return(
    <div className="about-page">
      <BackToHomeBtn handleClick={props.returnBtn}/>
      <div className="page-content">
        <h1>Hello! My name is Afiur Rahman Fahim.</h1>
        <p>But thats quite long! So, I like to use Faahim.</p>
      </div>
    </div>
  )
}

export default AboutPage;