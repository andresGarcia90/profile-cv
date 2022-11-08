import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonOutLine from '../UI/ButtonOutLine/ButtonOutLine';
import './MainPage.css';


const MainPage = () => {

  const handleButtonOutlineClick = (event) => {
    console.log(event);
  }

  return (
    <Container>
        <Row>
            <Col className='hello-title'>Hello, I'm </Col>
        </Row>
        <Row>
            <Col className='name-title'>Andr&eacute;s Garc&iacute;a Amado</Col>
        </Row>
        <Row>
            <Col className='position-title'>Bachelor Degree - Web Developer</Col>
        </Row>
        <Row>
            <Col>
            <ButtonOutLine clickButtonEvent={handleButtonOutlineClick}></ButtonOutLine></Col>
        </Row>
    </Container>
  )
}

export default MainPage