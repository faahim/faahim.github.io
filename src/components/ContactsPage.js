import React from 'react';
import BackToHomeBtn from './BackToHomeBtn';

const ContactsPage = props => {
  return(
    <div className="contacts-page">
      <BackToHomeBtn handleClick={props.returnBtn}/>
      <h1>Contact Me!</h1>
    </div>
  )
}

export default ContactsPage;