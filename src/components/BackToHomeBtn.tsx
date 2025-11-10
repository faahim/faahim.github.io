import React from 'react';
import { motion } from 'framer-motion';

export const BtnIcon: React.FC = () => {
  return (
    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
};

interface BackToHomeBtnProps {
  handleClick: () => void;
}

const BackToHomeBtn: React.FC<BackToHomeBtnProps> = ({ handleClick }) => {
  return (
    <motion.button
      onClick={handleClick}
      className="btn-back"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <BtnIcon />
    </motion.button>
  );
};

export default BackToHomeBtn;
