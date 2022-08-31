import React from 'react';
import './Content.css';

export const Content = (props) => {
  return (
    <div className='content'>
      <img className='content-image' src={props.image} alt={props.imageDescription}></img>
      <div className='content-text'>
        <span className='content-title'>{props.title}</span>
        <span>{props.subtitle}</span>
      </div>
      <button className='content-button'>{props.buttonTitle}</button>
    </div>
  )
}