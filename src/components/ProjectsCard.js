import React from 'react';
import { Svg2 } from './Svgs';
import '../styles/ProjectsCard.css';

function ProjectCard(props) {
  return(
    <div className="card projects-card">
      <h2>Projects I've worked on</h2>
      <p>Checkout some of the projects I've loved working on</p>
      <Svg2 />
    </div>
  )
}

export default ProjectCard;