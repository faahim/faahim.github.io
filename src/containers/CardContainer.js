import React, { Component } from 'react';
import AboutCard from '../components/AboutCard';
import ProjectsCard from '../components/ProjectsCard';
import WritingsCard from '../components/WritingsCard';
import ContactsCard from '../components/ContactsCard';
import '../styles/CardContainer.css';

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {clickHandler} = this.props;
    const scaleArr = window.innerWidth < 1000 ? [0.5, 1] : [1.3, 1];

    return(
      <div className="card-container">
        <AboutCard onClick={clickHandler} scaleArr={scaleArr}/>
        <ProjectsCard onClick={clickHandler} scaleArr={scaleArr}/>
        <WritingsCard onClick={clickHandler} scaleArr={scaleArr}/>
        <ContactsCard onClick={clickHandler} scaleArr={scaleArr}/>
      </div>
    )
  }
}

export default CardContainer;