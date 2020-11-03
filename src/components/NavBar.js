import React, { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import HubLink from './HubLink';

function NavBar() {

  // add active class to current location in navbar
  useEffect(() => {
    switch (window.location.pathname) {
      case '/portfolio':
        document.getElementById('portfolio-link').classList.add('active');
        break;
      case '/resume':
        document.getElementById('resume-link').classList.add('active');
        break;
      case '/chemistry':
        document.getElementById('chem-link').classList.add('active');
        break;
      case '/pictures':
        document.getElementById('pic-link').classList.add('active');
        break;
      case '/aboutme':
        document.getElementById('about-link').classList.add('active');
        break;
      default:
        break;
    }
  },[])

  return (
    <Navbar expand="lg" id='nav'>
      <Navbar.Brand href="/"> Kevin Miller, PhD - <span id="portfolio">Portfolio Home</span><span className="sr-only">(current)</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id='portfolio-link' href="portfolio">Portfolio</Nav.Link>
          <Nav.Link id='resume-link' href="resume">Resume</Nav.Link>
          <Nav.Link id='chem-link' href="chemistry">Chemistry</Nav.Link>
          <Nav.Link id='pic-link' href="pictures">Pictures</Nav.Link>
          <Nav.Link id='about-link' href="aboutme">About Me</Nav.Link>
        </Nav>
      <HubLink />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;