import React, { Component } from 'react';
import CardContainer from './CardContainer';
import AboutPage from '../components/AboutPage';
import ProjectsPage from '../components/ProjectsPage';
import WritingsPage from '../components/WritingsPage';
import ContactsPage from '../components/ContactsPage';
import { Svg1, Svg2} from '../components/Svgs';
import '../styles/App.css';
import WritingsCard from '../components/WritingsCard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cardSelected: false,
      choosenCard: null
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = param => event => {
    this.setState({
      cardSelected: true,
      choosenCard: param
    }, () => {
      const cardSvg = document.getElementsByClassName(this.state.choosenCard+"-svg")[0];
      cardSvg.classList.add("expand");
    });
  }

  render() {
    const pages = [
      {
        name: "about",
        component: <AboutPage/>
      },
      {
        name: "projects",
        component: <ProjectsPage/>
      },
      {
        name: "writings",
        component: <WritingsPage/>
      },
      {
        name: "contact",
        component: <ContactsPage/>
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
      </div>
    );
  }
}

export default App;
