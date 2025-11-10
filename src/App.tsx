import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardContainer from './containers/CardContainer';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import WritingsPage from './components/WritingsPage';
import ContactsPage from './components/ContactsPage';
import type { CardType } from './types';
import './styles/App.scss';

const App: React.FC = () => {
  const [cardSelected, setCardSelected] = useState(false);
  const [chosenCard, setChosenCard] = useState<CardType | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const clickHandler = (cardName: CardType) => () => {
    setCardSelected(true);
    setChosenCard(cardName);
    setHoveredCard(null);
  };

  const returnHome = () => {
    setCardSelected(false);
    setChosenCard(null);
  };

  const mouseEnter = (cardName: string) => () => {
    if (!cardSelected) {
      setHoveredCard(cardName);
    }
  };

  const mouseLeave = (cardName: string) => () => {
    if (hoveredCard === cardName) {
      setHoveredCard(null);
    }
  };

  const renderPage = () => {
    switch (chosenCard) {
      case 'about':
        return <AboutPage returnBtn={returnHome} />;
      case 'projects':
        return <ProjectsPage returnBtn={returnHome} />;
      case 'writings':
        return <WritingsPage returnBtn={returnHome} />;
      case 'contact':
        return <ContactsPage returnBtn={returnHome} />;
      default:
        return null;
    }
  };

  return (
    <div className={cardSelected ? 'App single-card' : 'App'}>
      <AnimatePresence mode="wait">
        {!cardSelected && (
          <motion.div
            key="cards"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CardContainer
              clickHandler={clickHandler}
              mouseEnter={mouseEnter}
              mouseLeave={mouseLeave}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {chosenCard && (
          <motion.div
            key={chosenCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG Background Shapes with Framer Motion - About */}
      <motion.svg
        className={`about-svg ${hoveredCard === 'about' ? 'hovered' : ''}`}
        animate={
          cardSelected && chosenCard === 'about'
            ? { scale: 40, rotate: 75, opacity: 1 }
            : { scale: 1, rotate: 0, opacity: 1 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        width="120"
        height="120"
        viewBox="0 0 1400 1400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient
          id="paint1_linear"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-1288 980 -980 -1288 1830 676)"
        >
          <stop offset="0" stopColor="#4DFFBF" />
          <stop offset="1" stopColor="#0A82A8" />
        </linearGradient>
        <path
          fill="url(#paint1_linear)"
          d="M 1203.84 900.353C 1203.84 1173.57 1573.1 1400 1298.36 1400C 1023.62 1400 0 1173.57 0 900.353C 0 627.138 1023.62 0 1298.36 0C 1573.1 0 1203.84 627.138 1203.84 900.353Z"
        />
      </motion.svg>

      {/* SVG Background Shapes - Projects */}
      <motion.svg
        className={`projects-svg ${hoveredCard === 'projects' ? 'hovered' : ''}`}
        animate={
          cardSelected && chosenCard === 'projects'
            ? { scale: 40, rotate: 75, opacity: 1 }
            : { scale: 1, rotate: 0, opacity: 1 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        width="140"
        height="140"
        viewBox="0 0 1132 1261"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient
          id="paint2_linear"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(852 -1132 1193.52 898.303 -317.715 715.604)"
        >
          <stop offset="0" stopColor="#FC4961" />
          <stop offset="1" stopColor="#6E0D1A" stopOpacity="0.65" />
        </linearGradient>
        <path
          fill="url(#paint2_linear)"
          d="M 1131.05 108.756C 1131.05 413.617 912.476 1260.16 591.046 1260.16C 269.617 1260.16 67.0459 1177.62 67.0459 872.756C 67.0459 567.895 -142.384 236.756 179.046 236.756C 500.476 236.756 1131.05 -196.105 1131.05 108.756Z"
        />
      </motion.svg>

      {/* SVG Background Shapes - Writings */}
      <motion.svg
        className={`writings-svg ${hoveredCard === 'writings' ? 'hovered' : ''}`}
        animate={
          cardSelected && chosenCard === 'writings'
            ? { scale: 40, rotate: 75, opacity: 1 }
            : { scale: 1, rotate: 0, opacity: 1 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        width="150"
        height="150"
        viewBox="0 0 543 644"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient
          id="paint3_linear"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(224 -606 606.001 224 -117.303 520)"
        >
          <stop offset="0" stopColor="#F43C00" />
          <stop offset="1" stopColor="#FF8A00" />
        </linearGradient>
        <path
          fill="url(#paint3_linear)"
          d="M 461.697 310.5C 425.697 398 785.697 544 223.697 644C 58.0115 644 -4.30269 455.835 145.697 310.5C 253.698 205.858 -313.303 85 262.697 0C 534.697 0 493.697 152.5 461.697 310.5Z"
        />
      </motion.svg>

      {/* SVG Background Shapes - Contact */}
      <motion.svg
        className={`contact-svg ${hoveredCard === 'contact' ? 'hovered' : ''}`}
        animate={
          cardSelected && chosenCard === 'contact'
            ? { scale: 40, rotate: 75, opacity: 1 }
            : { scale: 1, rotate: 0, opacity: 1 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        width="160"
        height="160"
        viewBox="0 0 607 586"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient
          id="paint4_linear"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(243.082 578.945 -578.944 299.385 324.921 -143.295)"
        >
          <stop offset="0" stopColor="#4500B5" />
          <stop offset="1" stopColor="#AA00AD" />
        </linearGradient>
        <path
          fill="url(#paint4_linear)"
          d="M 437.204 395.6C 327.081 529.342 337.472 585.342 179.177 585.342C 20.8817 585.342 36.6558 513.342 36.6558 328.465C -21.4687 103.342 -27.4688 -0.000180245 146.696 2.35782e-10C 492.531 139.342 812.886 -60.6582 437.204 395.6Z"
        />
      </motion.svg>
    </div>
  );
};

export default App;
