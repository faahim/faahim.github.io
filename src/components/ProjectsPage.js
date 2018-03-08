import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/ProjectsPage.css';
import '../styles/customScroll.css';
import nest from '../assets/nest.png';

const ProjectsList = props => {
  return(
    props.projects.map((project, index) => 
      <div className="project-item" key={index}>
        <div className="project-heading">
          <h2>{project.name}</h2>
          <h4>{project.heading}</h4>
        </div>
        <div className="thumb">
          <img src={project.thumb} alt="Project Preview"/>
        </div>
        <div className="project-links">
          {project.links.live && <a href={project.links.live}>Live</a>}
          {project.links.repo && <a href={project.links.repo}>Code on GitHub</a>}
        </div>
        <div className="project-details">
          <p>{project.details}</p>
        </div>
      </div>
    )
  )
}

const ProjectsPage = props => {
  const projects = [
    {
      name: "Nest Tab",
      heading: "I was tired of switching between browser, code editor, To-do app and a Timer app. So I created Nest Tab.",
      details: "Nest Tab is a simple Google Chrome extension that replaces your New Tab page with a clean looking page that contains tools to help you be productive. It currently features a Todo list and a Pomodoro clock that works together, a Shelf to dump URLs that you want to take a look at later, and a Bookmark quick acess tool. Nest Tab is created using React. See the repo for more details.",
      thumb: nest,
      links: {
        live: "https://faahim.github.io/nest-tab/landing-page/",
        repo: "https://github.com/faahim/nest-tab"
      }
    },
    {
      name: "Weather App",
      heading: "I creared Weather App, An extension for Google Chrome that replaces the default New Tab page with a clean looking page that provide tools to help you stay productive.",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis fugit vitae quia maiores perspiciatis aliquam magni consequatur sapiente officia aspernatur deserunt, consectetur aliquid. Ullam illum ut beatae! Ipsa, perferendis!",
      thumb: nest,
      links: {
        live: null,
        repo: null
      }
    }
  ]

  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="projects-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <h1>Time to talk work!</h1>
              <p>I like to try out new new tools and technoloogies to create apps/sites that somehow make my/someone else's life easier. Below are some of the projects that I loved working on. Also, I'm extremely greatful to the entire Open Source community for all the amazing stuffs that it provides us and makes it possible for everyone to create amazing things. I love contributing to Open Source whenever I can.</p>
              <div className="projects-container">
                <ProjectsList projects={projects}/>
              </div>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default ProjectsPage;