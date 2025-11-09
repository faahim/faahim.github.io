import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/customScroll.css';
import '../styles/AboutPage.css';

const AboutPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="about-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -150]} duration={500} delay={800}>
            <p className="page-tag">About Me</p>
          </Anime>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
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
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default AboutPage;