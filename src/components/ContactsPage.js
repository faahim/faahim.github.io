import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/ContactsPage.css';

const ContactsPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="contacts-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <h1>Let's get in touch!</h1>
              <p>I love meeting new people from around the world! Hit me up to talk about project ideas, Programming, JavaScript, Linux, Kittens and Puppys, Travelling, Books, Or Weather. Or just say "Hi" and we'll find something we enjoy talking about. You can find me through any of these platform you prefer.</p>
              <div className="link-list">
                <ul>
                  <li><a href="mailto:afiur.fahim@gmail.com" target="_blank">E-Mail</a></li>
                  <li><a href="https://github.com/faahim" target="_blank">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/faahim/" target="_blank">LinkedIn</a></li>
                  <li><a href="https://twitter.com/faahim01" target="_blank">Twitter</a></li>
                  <li><a href="https://medium.com/@afiur.fahim" target="_blank">Medium</a></li>
                  <li><a href="https://codepen.io/afiur_fahim/" target="_blank">Codepen</a></li>
                  <li><a href="https://www.facebook.com/afiur.fahim" target="_blank">Facebook</a></li>
                </ul>
              </div>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default ContactsPage;