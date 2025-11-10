import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import { WritingsData, writingsData } from '../data/data';
import '../styles/WritingsPage.css';

const ArticleList = props => {
  return(
    <ul>
      {props.articleList.map(article => 
        <li>
          <a href={article.link} target="_blank">{article.title}</a>
          <br/>
          <span>{article.publishedOn}</span>
        </li>
      )}
    </ul>
  )
}

const WritingsPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="writings-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -120]} duration={500} delay={800}>
            <p className="page-tag">Writings</p>
          </Anime>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <h1>I love to write about my experiences!</h1>
              <p className="page-intro">One of the reasons behind loving the development community so much is peoples mindset for giving away valuable resources and insights for free. I've read and benefitted from countless numbers of articles online. Writing articles about technology and experience is my way of giving back to the community. As a bonus, it's also a great way to solidifying my own learning. 
                <br/>
              Below are some of the articles I've written recently.</p>
              <div className="article-list">
                <ArticleList articleList={writingsData}/>
              </div>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default WritingsPage;