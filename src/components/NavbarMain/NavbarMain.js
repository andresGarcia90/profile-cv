import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMain = (props) => {

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio.</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link key="home" onClick={props.clickNavbar} >Home</Nav.Link>
            <Nav.Link key="about" onClick={props.clickNavbar} href="#about">About</Nav.Link>
            <Nav.Link key="skills" onClick={props.clickNavbar} href="#skills">Skills</Nav.Link>
            <Nav.Link key="projects" onClick={props.clickNavbar} href="#projects">Projects</Nav.Link>
            <Nav.Link key="contact" onClick={props.clickNavbar} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default NavbarMain