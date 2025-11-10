import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import BackToHomeBtn from './BackToHomeBtn';
import GlassEmoji from '../assets/GlassEmoji';
import { projectsData } from '../data/data';
import type { Project } from '../data/data';

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <div className="project-heading">
            <h2>{project.name}</h2>
            <p>{project.heading}</p>
          </div>
          <div className="thumb">
            <img src={project.thumb} alt="Project Preview" />
          </div>
          <div className="project-links">
            {project.links.live && (
              <a className="link" target="_blank" rel="noreferrer" href={project.links.live}>
                Live Demo
              </a>
            )}
            {project.links.repo && (
              <a className="link" target="_blank" rel="noreferrer" href={project.links.repo}>
                Code on GitHub
              </a>
            )}
          </div>
          <div className="project-details">
            <p>{project.details}</p>
          </div>
        </div>
      ))}
    </>
  );
};

interface ProjectsPageProps {
  returnBtn: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ returnBtn }) => {
  return (
    <>
      <Helmet>
        <title>Projects - Faahim | Front-End Developer</title>
        <meta name="description" content="Check out some of the projects I loved working on, from Chrome extensions to weather apps." />
      </Helmet>
      <motion.div
        className="projects-page"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
      >
        <BackToHomeBtn handleClick={returnBtn} />
        <motion.p
          className="page-tag"
          initial={{ left: -350 }}
          animate={{ left: -120 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          Projects
        </motion.p>
        <div className="page-content-wrapper">
          <div className="page-content">
            <h1>Time to talk work! <GlassEmoji /></h1>
            <p className="page-intro">
              I like to try out new tools and technologies to create apps/sites that somehow make my/someone else's life easier.
              Below are some of the projects that I loved working on. Also, I'm extremely grateful to the entire Open Source community
              for all the amazing stuff that it provides us and makes it possible for everyone to create amazing things.
              I love contributing to Open Source whenever I can.
            </p>
            <div className="projects-container">
              <ProjectsList projects={projectsData} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectsPage;
