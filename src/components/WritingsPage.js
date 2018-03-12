import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
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
  const articleList = [
    {
      title: "Learning and Burning Out — Me In-front of Mirror #1",
      publishedOn: "Medium",
      link: "https://medium.com/@afiur.fahim/learning-and-burn-out-7f188392d56?source=portfolio"
    },
    {
      title: "CSS Box Model for Beginner: Unlocking the Magic of CSS",
      publishedOn: "Hacker Noon",
      link: "https://hackernoon.com/css-box-model-45ecf4ac219e?source=portfolio"
    },
    {
      title: "HTML Content Flow: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/html-content-flow-d94b7c03f98?source=portfolio"
    },
    {
      title: "CSS Selectors Explained with Demo: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/css-selectors-c4ee17b90886?source=portfolio"
    },
    {
      title: "Getting Started with CSS — A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/coding-in-css-ed88f5a2d3a9?source=portfolio"
    },
    {
      title: "Understanding HTML Block and Inline Elements: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/html-block-and-inline-elements-b65775e86599?source=portfolio"
    },
    {
      title: "All Around HTML Forms: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/creating-html-form-d6879337fcbb?source=portfolio"
    },
    {
      title: "Creating HTML Table: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/creating-html-table-dab3dc57a78a?source=portfolio"
    },
    {
      title: "Creating Lists in HTML: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/creating-list-in-html-93ecd69124a?source=portfolio"
    },
    {
      title: "Creating HTML Links and Images: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/html-links-and-image-d1e0620f78e1?source=portfolio"
    },
    {
      title: "HTML Hierarchy Tree: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/html-hierarchy-tree-7a2947f2bf01?source=portfolio"
    },
    {
      title: "HTML File Structure: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/html-file-structure-438da76fc261?source=portfolio"
    },
    {
      title: "The Basics to Code in HTML: A Learning Journey to Web Development",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/the-basics-to-code-in-html-f4b6aab795c7?source=portfolio"
    },
    {
      title: "A Learning Journey to Web Development: History of HTML",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/a-learning-journey-to-web-development-history-of-html-401c197468c8?source=portfolio"
    },
    {
      title: "Learning Journey to Web Development — The Ultimate Blueprint",
      publishedOn: "UX Art",
      link: "https://medium.com/ux-art/learning-journey-to-web-development-6ebd8e56c4e6?source=portfolio"
    },
  ]
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="writings-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <h1>I love to write about my experiences!</h1>
              <p className="page-intro">One of the reason behind loving the development cummunity so much is peoples mindset for giving away valueabe resources and inshights for free. I've read and benifitted from countless number of articles online. Writting articles about technology and experience is my way of giving back to the community. As a bonus, it's also a great way for solidifying my own learning. <br/>
              Below are some of the articles I've written recently.</p>
              <div className="article-list">
                <ArticleList articleList={articleList}/>
              </div>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default WritingsPage;