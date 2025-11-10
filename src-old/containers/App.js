import React, { Component } from 'react';
import CardContainer from './CardContainer';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import WritingsPage from '../components/WritingsPage';
import ContactsPage from '../components/ContactsPage';
import { Svg1, Svg2, Svg3, Svg4} from '../components/Svgs';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardSelected: false,
      choosenCard: null
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.returnHome = this.returnHome.bind(this);
  }

  clickHandler = param => event => {
    this.setState({
      cardSelected: true,
      choosenCard: param
    }, () => {
      const hovered = document.querySelector(".hovered");
      if(hovered) {hovered.classList.remove("hovered")};
      const cardSvg = document.getElementsByClassName(param+"-svg")[0];
      cardSvg.classList.add("expand");
    });
  }

  returnHome() {
    this.setState({
      cardSelected: false,
      choosenCard: null
    }, () => {
      const expandedSvg = document.getElementsByClassName("expand")[0];
      expandedSvg.classList.remove("expand");
    })
  }

  render() {
    const pages = [
      {
        name: "about",
        component: <AboutPage returnBtn={this.returnHome}/>
      },
      {
        name: "projects",
        component: <ProjectsPage returnBtn={this.returnHome}/>
      },
      {
        name: "writings",
        component: <WritingsPage returnBtn={this.returnHome}/>
      },
      {
        name: "contact",
        component: <ContactsPage returnBtn={this.returnHome}/>
      }
    ];
    return (
      <div className={this.state.cardSelected ? "App single-card" : "App"}>
        {!this.state.cardSelected && <CardContainer clickHandler={this.clickHandler}/>}
        {this.state.choosenCard && pages.map(page => {
          if(page.name === this.state.choosenCard) {
            return page.component;
          }
        })}
        <Svg1/>
        <Svg2/>
        <Svg3/>
        <Svg4/>
      </div>
    );
  }
}

export default App;
