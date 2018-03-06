import React from 'react';
import Anime from 'react-anime';
import BackToHomeBtn from './BackToHomeBtn';

const ContactsPage = props => {
  return(
    <div className="contacts-page">
      <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
        <div className="contact-page">
            <BackToHomeBtn handleClick={props.returnBtn}/>
            <div className="page-content">
              <h1>Let's get in touch!</h1>
              <p>But thats quite long! So, I like to use Faahim.</p>
            </div>
        </div>
      </Anime>
    </div>
  )
}

export default ContactsPage;