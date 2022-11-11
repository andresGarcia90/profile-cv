import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import style from './ChartBarFlat.module.css'

const ChartBarFlat = (props) => {

  return (
    <>
    <div className={style['progress-bar']}>
      <Row>
        <Col style={{color: 'black'}}>{props.description}</Col>
        <Col style={{color: 'black', textAlign: 'end'}}>{props.percentage}%</Col>
      </Row>
      <div className={style['progress-track']}>
        <div className={style['progress-fill']} style={{width: props.percentage}}>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChartBarFlat;
