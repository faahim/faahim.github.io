import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import GlassEmoji from '../assets/GlassEmoji';
import { BtnIcon } from './BackToHomeBtn';
import '../styles/ProjectsPage.css';
import '../styles/customScroll.css';

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
          {project.links.live && <a className="link" href={project.links.live}>Live Demo</a>}
          {project.links.repo && <a className="link" href={project.links.repo}>Code on GitHub</a>}
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
      thumb: "http://res.cloudinary.com/dzuqw67ww/image/upload/v1519715501/Nest_Screens-main-min_twxhlb.png",
      links: {
        live: "https://faahim.github.io/nest-tab/landing-page/",
        repo: "https://github.com/faahim/nest-tab"
      }
    },
    {
      name: "Weather App",
      heading: "A weather app that you'll will actually want to look at. Also, it's cool because it gives you famous quotation based on weather. Very helpful, right? -_-",
      details: "Its a web app that shows live weather information and forecast of your current location. You can also search for any location to see its weather info. I've used JavaScript and jQuery along with HTML and CSS to create it. The app is fully responsive. It uses Dark Skies API for fetching weather informations. It also utilizes Google Maps API for all the location related data. I've used Skycons, an amazing animated weather iconset made by DatkSkies, to present the weather data.",
      thumb: "http://res.cloudinary.com/dzuqw67ww/image/upload/v1520693932/weatherApp_xhenuq.png",
      links: {
        live: "https://faahim.github.io/local-weather-viewer/",
        repo: "https://github.com/faahim/local-weather-viewer"
      }
    },
    {
      name: "Tribute Page",
      heading: "I had to pick someone to make a tribute page on, for the freeCodeCamp curriculmn. I picked Quincy Larson.",
      details: "Quincy Larson, who prefers to describe himself just as a teacher, is also the founder of freeCodeCamp. freeCodeCamp is a non-profit organization where anyone can learn to code for completely free of charge. Quincy is an inspiring name in the industry. Personally, he is one of the most inspiring people I've even seen in my life. Not only for his amazing contribution to the society, but also for his astonishing way of living.",
      thumb: "http://res.cloudinary.com/dzuqw67ww/image/upload/v1520693932/tributePage_fubijo.png",
      links: {
        live: "https://faahim.github.io/tribute-page/",
        repo: "https://github.com/faahim/tribute-page"
      }
    },
    {
      name: "Twitch Coder",
      heading: "I enjoy code streaming. There's a lot of great channel that streams live coding on Twich. But I found that it was hard to find coding channel that is good and active. So I gathered some of the best channels and gathered them here.",
      details: "This app is a directory to find some of the best code streaming channel on twitch.tv. It shows you a the list of different channels along with live meta information like weather they are streaming right now, what they are steaming etc. You can also look up for any channel on Twitch using the Search UI. This app was made using JavaScript, HTML and CSS. It uses the twitch.tv API to fetch channel information.",
      thumb: "http://res.cloudinary.com/dzuqw67ww/image/upload/v1520693928/twichCoder_ea9rdb.png",
      links: {
        live: "https://faahim.github.io/twitch-coders/",
        repo: "https://github.com/faahim/twitch-coders"
      }
    },
    {
      name: "Random Quote Generator",
      heading: "I didn't understand how to consume API. I didn't know what they are, but they sounded complex. I built this little app to understand API.",
      details: "It's a simple little web app that shows you a nice quote from famous people every time you press the button. It fetches the quotes from a Mashape API. You can also Tweet quotes if find one that you really like. This app was built using HTML, CSS and JavaScript(jQuery).",
      thumb: "http://res.cloudinary.com/dzuqw67ww/image/upload/v1520693927/randomQuote_thfkne.png",
      links: {
        live: "https://faahim.github.io/random-quote-generator/",
        repo: "https://github.com/faahim/random-quote-generator"
      }
    },
    {
      name: "Wikipedia Viewer",
      heading: "Ever felt like the Wikipedia page could look a little nicer? I did.",
      details: "An small JavaScript based app that fetches results for any given strings from Wikipedia through the Wikipedia API and shows the results back on the page. This project was done as a part of the freeCodeCamp learning curriculum. It's built using HTML, CSS (SASS) and JavaScript (jQury).",
      thumb: "http://res.cloudinary.com/dzuqw67ww/image/upload/v1520693927/wikipediaViewer_qtqnlp.png",
      links: {
        live: "https://faahim.github.io/wikipedia-viewer/",
        repo: "https://github.com/faahim/wikipedia-viewer"
      }
    }
  ]

  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="projects-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -120]} duration={500} delay={800}>
            <p className="page-tag">Projects</p>
          </Anime>
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