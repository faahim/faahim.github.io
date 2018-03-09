import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import GlassEmoji from '../assets/GlassEmoji';
import { BtnIcon } from './BackToHomeBtn';
import '../styles/ProjectsPage.css';
import '../styles/customScroll.css';
import nest from '../assets/nest.png';
import weatherApp from '../assets/weatherApp.png';

const ProjectsList = props => {
  return(
    props.projects.map((project, index) => 
      <div className="project-item" key={index}>
        <div className="project-heading">
          <h2>{project.name}</h2>
          <p>{project.heading}</p>
        </div>
        <div className="thumb">
          <img src={project.thumb} alt="Project Preview"/>
        </div>
        <div className="project-links">
          {project.links.live && <a className="link" href={project.links.live}>Live<BtnIcon/></a>}
          {project.links.repo && <a className="link" href={project.links.repo}>Code on GitHub<BtnIcon/></a>}
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
      heading: "A weather app that you'll will actually want to look at. Also, it's cool because it gives you famous quotation based on weather. Very helpful, right? -_-",
      details: "Its a web app that shows live weather information and forecast of your current location. You can also search for any location to see its weather info. I've used JavaScript and jQuery along with HTML and CSS to create it. The app is fully responsive. It uses Dark Skies API for fetching weather informations. It also utilizes Google Maps API for all the location related data. I've used Skycons, an amazing animated weather iconset made by DatkSkies, to present the weather data.",
      thumb: weatherApp,
      links: {
        live: "https://faahim.github.io/local-weather-viewer/",
        repo: "https://github.com/faahim/local-weather-viewer"
      }
    }
  ]

  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="projects-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <h1>Time to talk work! <GlassEmoji/></h1>
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