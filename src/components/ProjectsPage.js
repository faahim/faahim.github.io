import React from 'react';
import Anime from 'react-anime';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/ProjectsPage.css';

const ProjectsPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="projects-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <div className="page-content">
            <h1>Time to talk work!</h1>
            <p>But thats quite long! So, I like to use Faahim.</p>
          </div>
      </div>
    </Anime>
  )
}

export default ProjectsPage;