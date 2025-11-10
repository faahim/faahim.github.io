import React from 'react';
import { motion } from 'framer-motion';

interface ContactsCardProps {
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  scaleArr: [number, number];
}

const ContactsCard: React.FC<ContactsCardProps> = ({ onClick, onMouseEnter, onMouseLeave, scaleArr }) => {
  return (
    <motion.div
      className="card contacts-card"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, scale: scaleArr[0] }}
      animate={{ opacity: 1, scale: scaleArr[1] }}
      transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
    >
      <h2>Get in touch!</h2>
      <p>I'm friendly, Let's talk!</p>
    </motion.div>
  );
};

export default ContactsCard;
