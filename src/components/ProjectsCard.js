import React from 'react';
import '../styles/ProjectsCard.css';

function ProjectCard(props) {
  return(
    <div className="card projects-card" onClick={props.onClick('projects')}>
      <h2>Projects I've worked on</h2>
      <p>Checkout some of the projects I've loved working on</p>
    </div>
  )
}

export default ProjectCard;