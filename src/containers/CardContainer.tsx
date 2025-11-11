import React from 'react';
import AboutCard from '../components/AboutCard';
import ProjectsCard from '../components/ProjectsCard';
import WritingsCard from '../components/WritingsCard';
import ContactsCard from '../components/ContactsCard';
import type { CardType } from '../types';

interface CardContainerProps {
  clickHandler: (cardName: CardType) => () => void;
  mouseEnter: (cardName: string) => () => void;
  mouseLeave: (cardName: string) => () => void;
}

const CardContainer: React.FC<CardContainerProps> = ({ clickHandler, mouseEnter, mouseLeave }) => {
  const scaleArr: [number, number] = window.innerWidth < 1000 ? [0.5, 1] : [1.3, 1];

  return (
    <div className="card-container">
      <AboutCard
        onClick={clickHandler('about')}
        onMouseEnter={mouseEnter('about')}
        onMouseLeave={mouseLeave('about')}
        scaleArr={scaleArr}
      />
      <ProjectsCard
        onClick={clickHandler('projects')}
        onMouseEnter={mouseEnter('projects')}
        onMouseLeave={mouseLeave('projects')}
        scaleArr={scaleArr}
      />
      <WritingsCard
        onClick={clickHandler('writings')}
        onMouseEnter={mouseEnter('writings')}
        onMouseLeave={mouseLeave('writings')}
        scaleArr={scaleArr}
      />
      <ContactsCard
        onClick={clickHandler('contact')}
        onMouseEnter={mouseEnter('contact')}
        onMouseLeave={mouseLeave('contact')}
        scaleArr={scaleArr}
      />
    </div>
  );
};

export default CardContainer;
