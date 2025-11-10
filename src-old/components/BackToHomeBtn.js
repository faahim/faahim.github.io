import React from 'react';
import '../styles/BtnBack.css';
import Anime from 'react-anime';
// import btnIcon from '../assets/Btn.svg';

export const BtnIcon = props => {
  return(
    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  )
}

const BackToHomeBtn = props => {
  return(
    <Anime easing="easeInSine" elasticity={800} duration={500} scale={[0, 1]}>
      <button onClick={props.handleClick} className="btn-back"><BtnIcon/></button>
    </Anime>
  )
}

export default BackToHomeBtn;