import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"> Kevin Miller, PhD - <span id="portfolio">Portfolio Home</span><span class="sr-only">(current)</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="portfolio.html">Portfolio</Nav.Link>
          <Nav.Link href="resume.html">Resume</Nav.Link>
          <Nav.Link href="chemistry.html">Chemistry</Nav.Link>
          <Nav.Link href="pictures.html">Pictures</Nav.Link>
          <Nav.Link href="contact.html">Contact</Nav.Link>
          <Nav.Link href="about-me.html">About Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;