import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import BackToHomeBtn from './BackToHomeBtn';
import { writingsData } from '../data/data';
import type { Writing } from '../data/data';

interface ArticleListProps {
  articleList: Writing[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articleList }) => {
  return (
    <ul>
      {articleList.map((article, index) => (
        <li key={index}>
          <a href={article.link} target="_blank" rel="noreferrer">
            {article.title}
          </a>
          <br />
          <span>{article.publishedOn}</span>
        </li>
      ))}
    </ul>
  );
};

interface WritingsPageProps {
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
    x: -230,
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
    x: -230,
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

const WritingsPage: React.FC<WritingsPageProps> = ({ returnBtn }) => {
  return (
    <>
      <Helmet>
        <title>Writings - Faahim | Front-End Developer</title>
        <meta name="description" content="Articles about web development, CSS, HTML, and my learning experiences." />
      </Helmet>
      <motion.div
        className="writings-page"
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
          Writings
        </motion.p>
        <motion.div
          className="page-content-wrapper"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="page-content">
            <h1>I love to write about my experiences!</h1>
            <p className="page-intro">
              One of the reasons behind loving the development community so much is peoples mindset for giving away valuable
              resources and insights for free. I've read and benefitted from countless numbers of articles online. Writing
              articles about technology and experience is my way of giving back to the community. As a bonus, it's also a great
              way to solidifying my own learning.
              <br />
              Below are some of the articles I've written recently.
            </p>
            <div className="article-list">
              <ArticleList articleList={writingsData} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default WritingsPage;
