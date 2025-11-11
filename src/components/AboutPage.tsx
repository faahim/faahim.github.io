import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import BackToHomeBtn from './BackToHomeBtn';

interface AboutPageProps {
  returnBtn: () => void;
}

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

const AboutPage: React.FC<AboutPageProps> = ({ returnBtn }) => {
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
        <BackToHomeBtn handleClick={returnBtn} />
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
            <p>You can call me <strong>Faahim.</strong> :)</p>
            <p>I'm a full-stack developer based in Bangladesh. I like creating stuff. Useful and beautiful stuff. Stuff that doesn't just work, but looks and feels good - like a butterfly fluttering on your fingertips.</p>

            <h3>Skills</h3>
            <p>My current stack consists of <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, <strong>Shadcn UI</strong>, <strong>Supabase</strong>, <strong>Firebase</strong>, <strong>SASS</strong>, with foundational things like <strong>CSS</strong>, <strong>HTML</strong> of course.</p>

            <p>However, I believe in tool agnostic, core skills. In an industry that moves faster than Usain Bolt, the choice of frameworks/languages doesn't matter as much. Thanks to all the AI tools, I'm a polyglot now. The ability to learn quickly and be comfortable with newer technology is what matters to me. I'm a quick learner. I prioritize concepts over techniques.</p>
            <p>Simplicity, though overused (and sometimes misused) as a term, is something I really value. I like to build solutions that are simple yet interactive for the users.</p>
            <p>Besides coding, I'm also very passionate about traveling and reading. I feel like the world is a book that was given to me for exploring when I was born, and I don't wanna die before reading all the pages. I plan to become a nomad someday and explore the endless beauty that this planet homes.</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutPage;
