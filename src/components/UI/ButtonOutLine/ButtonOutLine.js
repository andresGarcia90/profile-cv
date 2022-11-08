import React from 'react';
import style from'./ButtonOutLine.module.css';

const ButtonOutLine = (props) =>{
  const text = props.text ? props.text : 'Contact me'
  return (
    <button className={style['button-outlet-yellow']} onClick={props.clickButtonEvent}>{text}</button>
  )
}

export default ButtonOutLine