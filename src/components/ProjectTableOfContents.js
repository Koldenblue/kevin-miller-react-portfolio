import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";

export default function ProjectTableOfContents() {
  let styles = {
    tableOfContents: {
      backgroundColor: 'red',
      height: '200px',
      zIndex: '9999',
      position: 'fixed'
    }
  }

  // <div style={styles.tableOfContents}>
  //   <a href='#bartender'>Express Bartender</a>
  //   <a href='#connect'>Connect 4</a>
  // </div>
  return (<>
    <Nav defaultActiveKey="/home" className="project-nav flex-column">
      <Nav.Link className='top-link' href="#connect4">Active</Nav.Link>
      <Nav.Link href=''>Quick Readme Generator</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Node Python SQL Database Manager</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <Nav.Link href='#connect4'>Connect 4</Nav.Link>
    </Nav>
    {/* <ListGroup className='table-contents'>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur acasdasd</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup> */}
  </>)
}