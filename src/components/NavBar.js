import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import HubLink from './HubLink';

function NavBar() {
  return (
    <Navbar expand="lg" id='nav'>
      <Navbar.Brand href="/kevin-miller-react-portfolio"> Kevin Miller, PhD - <span id="portfolio">Portfolio Home</span><span className="sr-only">(current)</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/kevin-miller-react-portfolio/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/kevin-miller-react-portfolio/resume">Resume</Nav.Link>
          <Nav.Link href="/kevin-miller-react-portfolio/chemistry">Chemistry</Nav.Link>
          <Nav.Link href="/kevin-miller-react-portfolio/pictures">Pictures</Nav.Link>
          <Nav.Link href="/kevin-miller-react-portfolio/aboutme">About Me</Nav.Link>
        </Nav>
      <HubLink />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;