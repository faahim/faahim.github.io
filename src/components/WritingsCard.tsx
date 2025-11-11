import React from 'react';
import { motion } from 'framer-motion';

interface WritingsCardProps {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  scaleArr: [number, number];
}

const WritingsCard: React.FC<WritingsCardProps> = ({ onClick, onMouseEnter, onMouseLeave, scaleArr }) => {
  return (
    <motion.div
      className="card writings-card"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, scale: scaleArr[0], y: 20 }}
      animate={{ opacity: 1, scale: scaleArr[1], y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.7
      }}
    >
      <h2>Writings</h2>
      <p>Check out some of my writings!</p>
    </motion.div>
  );
};

export default WritingsCard;
