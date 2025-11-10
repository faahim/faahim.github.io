import React, { Component } from 'react';
import AboutCard from '../components/AboutCard';
import ProjectsCard from '../components/ProjectsCard';
import WritingsCard from '../components/WritingsCard';
import ContactsCard from '../components/ContactsCard';
import '../styles/CardContainer.css';

class CardContainer extends Component {

  mouseEnter = param => event => {
    const hoverTarget = document.querySelector(`.${param}-svg`);
    if (hoverTarget) {hoverTarget.classList.add("hovered")};
  }

  mouseLeave = param => event => {
    const unHoverTarget = document.querySelector(".hovered");
    if (unHoverTarget) {unHoverTarget.classList.remove("hovered")};
  }

  render() {
    const {clickHandler} = this.props;
    const scaleArr = window.innerWidth < 1000 ? [0.5, 1] : [1.3, 1];

    return(
      <div className="card-container">
        <AboutCard onClick={clickHandler} MouseEnter={this.mouseEnter} MouseLeave={this.mouseLeave} scaleArr={scaleArr}/>
        <ProjectsCard onClick={clickHandler} MouseEnter={this.mouseEnter} MouseLeave={this.mouseLeave} scaleArr={scaleArr}/>
        <WritingsCard onClick={clickHandler} MouseEnter={this.mouseEnter} MouseLeave={this.mouseLeave} scaleArr={scaleArr}/>
        <ContactsCard onClick={clickHandler} MouseEnter={this.mouseEnter} MouseLeave={this.mouseLeave} scaleArr={scaleArr}/>
      </div>
    )
  }
}

export default CardContainer;