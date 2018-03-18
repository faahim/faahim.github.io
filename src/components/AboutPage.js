import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/customScroll.css';
import '../styles/AboutPage.css';

const AboutPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="about-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -150]} duration={500} delay={800}>
            <p className="page-tag">About Me</p>
          </Anime>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <p>Hi there! <span className="hand-wave">👋</span></p>
              <h1>I'm Afiur Rahman Fahim.</h1>
              <p>But thats quite long! So, I like to use <strong>Faahim.</strong> :)</p>
              <p>I'm a 22 year old developer based in Bangladesh. I specialize in JavaScript and my main area of interest is Front-End Development. I LOVE developing tools/sites that solves problem or help make someones life easier. In shrot, I like impactful work.</p>
              <h3>Skills</h3>
              <p>I belive in tool agonistic skills. Being in a industry that moves at the speed of light, it sometimes doesn't matters what frameworks/tools I'm familier with. Because tools/frameworks are so fickle these days that they can become absolete within months! What matters more is how fast can I learn and make myself comfortable with newer technology. I believe I'm a quick learner. I priotize concepts over techniques.</p>
              <p>However, my current skillset includes <strong>JavaScript</strong>, <strong>React</strong>, <strong>Redux</strong>, <strong>Firebase</strong>, <strong>SASS</strong>, <strong>Boostrap</strong>, <strong>CSS</strong>, <strong>HTML</strong> etc. And thats excluding all the common (yet sometime complex) build/workflow tools like Webpack, Babel etc. And oh, No progressbar showing I'm 93% expert at React, Sorry.</p>
              <p>Simplicity, Though overused (and sometime misused) as a term, Is something I really value. I like to build build solutions that are simple yet interactive for the users.</p>
              <p>Besides coding, I'm also very passionate about travelling and reading. I feel the world is a book that was given to me for exploring when I was born, and I don't wanna die before reading all the pages. I plan to become a nomad someday and explore the endless beauty that this planet homes.</p>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default AboutPage;