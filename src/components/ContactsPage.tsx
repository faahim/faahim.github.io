import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import BackToHomeBtn from './BackToHomeBtn';
import mail from '../assets/mail.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import medium from '../assets/medium.svg';
import linkedin from '../assets/linkedin.svg';
import codepen from '../assets/codepen.svg';
import facebook from '../assets/facebook.svg';

const pageVariants = {
  initial: {
    opacity: 0,
    y: -30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3, ease: "easeOut" as const }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

const pageTagVariants = {
  initial: {
    rotate: -90,
    x: -220,
    opacity: 0
  },
  animate: {
    rotate: -90,
    x: 0,
    opacity: 0.1,
    transition: { duration: 0.5, delay: 0.8, ease: "easeOut" as const }
  },
  exit: {
    rotate: -90,
    x: -220,
    opacity: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.4, ease: "easeOut" as const }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeOut" as const }
  }
};

const ContactsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Faahim | Front-End Developer</title>
        <meta name="description" content="Let's get in touch! Find me on GitHub, LinkedIn, Twitter, Medium, and more." />
      </Helmet>
      <motion.div
        className="contacts-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <BackToHomeBtn />
        <motion.p
          className="page-tag"
          variants={pageTagVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Contacts
        </motion.p>
        <motion.div
          className="page-content"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h1>Let's get in touch!</h1>
          <p>
            I love meeting new people from around the world! Hit me up to talk about project ideas, Programming, JavaScript,
            Linux, Kittens and Puppies, Travelling, Books, Or Weather. Or just say "Hi" and we'll find something we enjoy
            talking about. You can find me through any of the platform listed below.
          </p>
          <div className="link-list">
            <ul>
              <li>
                <a href="mailto:afiur.fahim@gmail.com" target="_blank" rel="noreferrer">
                  <img src={mail} alt="Mail me!" />
                </a>
              </li>
              <li>
                <a href="https://github.com/faahim" target="_blank" rel="noreferrer">
                  <img src={github} alt="GitHub" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/faahim/" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/faahim01" target="_blank" rel="noreferrer">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@afiur.fahim" target="_blank" rel="noreferrer">
                  <img src={medium} alt="Medium" />
                </a>
              </li>
              <li>
                <a href="https://codepen.io/afiur_fahim/" target="_blank" rel="noreferrer">
                  <img src={codepen} alt="CodePen" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/afiur.fahim" target="_blank" rel="noreferrer">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactsPage;
