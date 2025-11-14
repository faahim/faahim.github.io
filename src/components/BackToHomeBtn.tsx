import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const BtnIcon: React.FC = () => {
  return (
    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
};

const buttonVariants = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3, ease: "easeOut" as const }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeOut" as const }
  }
};

const BackToHomeBtn: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/')}
      className="btn-back"
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BtnIcon />
    </motion.button>
  );
};

export default BackToHomeBtn;
