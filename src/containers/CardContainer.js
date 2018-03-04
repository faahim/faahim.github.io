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
    const allCards = [
     {
       name: "about",
       component: <AboutCard onClick={clickHandler}/>
     },
     {
       name: "projects",
       component: <ProjectsCard onClick={clickHandler}/>
     },
     {
       name: "writings",
       component: <WritingsCard onClick={clickHandler}/>
     },
     {
       name: "contact",
       component: <ContactsCard onClick={clickHandler}/>
     }
    ];

    return(
      <div className="card-container">
        {this.props.choosenCard == null && allCards.map(item => item.component)}
        {this.props.choosenCard && allCards.map(item => {
          if(item.name == this.props.choosenCard) {
            return item.component
          }
        })}
      </div>
    )
  }
}

export default CardContainer;