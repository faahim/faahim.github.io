import React from 'react';
import '../styles/ProjectsCard.css';
import Anime from 'react-anime';

function ProjectCard(props) {
  return(
    <Anime easing="easeInSine" scale={[1.3, 1]} opacity={[0, 1]} delay={500} duration={300}>
      <div className="card projects-card" onClick={props.onClick('projects')}>
        <h2>Projects I've worked on</h2>
        <p>Checkout some of the projects I've loved working on</p>
      </div>
    </Anime>
  )
}

export default ProjectCard;