import React from 'react';
import BackToHomeBtn from './BackToHomeBtn';

const ProjectsPage = props => {
  return(
    <div className="projects-page">
      <BackToHomeBtn handleClick={props.returnBtn}/>
      <h1>Let's do some projects!</h1>
    </div>
  )
}

export default ProjectsPage;