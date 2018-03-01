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
    return(
      <div className="card-container">
        <AboutCard/>
        <ProjectsCard/>
        <WritingsCard/>
        <ContactsCard/>
      </div>
    )
  }
}

export default CardContainer;