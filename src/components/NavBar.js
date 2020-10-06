import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

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
          <Nav.Link href="contact">Contact</Nav.Link>
          <Nav.Link href="aboutme">About Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;