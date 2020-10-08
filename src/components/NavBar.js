import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import HubLink from './HubLink';

function NavBar() {
  return (
    <Navbar expand="lg" id='nav'>
      <Navbar.Brand href="/"> Kevin Miller, PhD - <span id="portfolio">Portfolio Home</span><span className="sr-only">(current)</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="portfolio">Portfolio</Nav.Link>
          <Nav.Link href="resume">Resume</Nav.Link>
          <Nav.Link href="chemistry">Chemistry</Nav.Link>
          <Nav.Link href="pictures">Pictures</Nav.Link>
          <Nav.Link href="aboutme">About Me</Nav.Link>
        </Nav>
      <HubLink />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;