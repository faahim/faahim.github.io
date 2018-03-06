import React from 'react';
import Anime from 'react-anime';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/ContactsPage.css';

const ContactsPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="contacts-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <div className="page-content">
            <h1>Let's get in touch!</h1>
            <p>But thats quite long! So, I like to use Faahim.</p>
          </div>
      </div>
    </Anime>
  )
}

export default ContactsPage;