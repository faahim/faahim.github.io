import React from 'react';
import { motion } from 'framer-motion';

interface ProjectsCardProps {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  scaleArr: [number, number];
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ onClick, onMouseEnter, onMouseLeave, scaleArr }) => {
  return (
    <motion.div
      className="card projects-card"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, scale: scaleArr[0] }}
      animate={{ opacity: 1, scale: scaleArr[1] }}
      transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
    >
      <h2>Projects and Contribution</h2>
      <p>Check out some of the projects I loved working on</p>
    </motion.div>
  );
};

export default ProjectsCard;
