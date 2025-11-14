import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import BackToHomeBtn from './BackToHomeBtn';

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
    x: -200,
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
    x: -200,
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

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Faahim | Front-End Developer</title>
        <meta name="description" content="Hi! I'm Afiur Rahman Fahim, a full-stack developer who loves creating beautiful and useful stuff." />
      </Helmet>
      <motion.div
        className="about-page"
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
          About Me
        </motion.p>
        <motion.div
          className="page-content-wrapper"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="page-content">
            <p>Hi there! <span className="hand-wave">👋</span></p>
            <h1>I'm Afiur Rahman Fahim.</h1>
            <p>Yeah, yeah. You can call me <strong>Faahim.</strong> :)</p>
            <p>I love creating things for the internet. Useful things. Beautiful things. Things that not only work, but look and feel good. Like a butterfly landing on your fingertips, if butterflies were made of code.</p>
            <p>I'm based in Bangladesh, but my mind wanders to places. Thank God, the mind doesn't need visas.</p>

            <h3>Skills</h3>
            <p>I believe in tool-agnostic core skills. Right now, I live in <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong> etc. But this industry moves faster than over-caffeinated Usain Bolt. Tools and frameworks come and go as if they're having an existential crisis. I value the ability to pick up new skills quickly. So for me, it's fundamentals over frameworks.</p>

            <p>Simplicity and beauty are my north star. I like building things that calm the eye, and just work - no matter how complicated they are under the hood. Something that'd make you go, "Oh, that's nice!"</p>

            <h3>Me without WiFi</h3>
            <p>If I'm not online, I'm probably reading. Or I'm travelling. Or, I'm reading <em>while</em> travelling.</p>
            <p>I believe the world is a beautiful book I was gifted at birth, and I don't want to die before flipping through the pages and reading all the stories.</p>
            <p>I'm overwhelmed by just how interesting everything is. Writing, making friends, music, mountains, cats, arts, quiet forests, busy city streets, contrails at sunset and Orion on a dark night - I like too many things to be good at any single one of them!</p>
            <p>My dream is to wander the world, read great books, write when ideas bite, meet people, listen to their stories, figure out how I can help them with code and creativity, and build solutions from cozy coffee shops. Hopefully, with a loved one sitting across from me. 🤞</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutPage;
