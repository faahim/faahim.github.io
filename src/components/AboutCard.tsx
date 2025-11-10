import React from 'react';
import { motion } from 'framer-motion';

interface AboutCardProps {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  scaleArr: [number, number];
}

const AboutCard: React.FC<AboutCardProps> = ({ onClick, onMouseEnter, onMouseLeave, scaleArr }) => {
  return (
    <motion.div
      className="card about-card"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, scale: scaleArr[0] }}
      animate={{ opacity: 1, scale: scaleArr[1] }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeIn" }}
    >
      <h2>I'm Faahim.</h2>
      <p>I'm a Front-End developer. Click to learn more.</p>
    </motion.div>
  );
};

export default AboutCard;
