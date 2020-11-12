import React from "react";
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function HubLink() {
  let styles = {
    git: {
      marginRight: '1em',
      // float: 'right'
    },
    linkedIn: {
      height: '32px',
      marginRight: '.5em',
      // float: 'right'
    }
  }
  return (
    <>
        <DropdownButton className='dropdown' title='Contact' drop='left' variant="info" id="dropdown-contact">
          <Dropdown.Item disabled>Email: klmille@gmail.com</Dropdown.Item>
          <Dropdown.Item disabled>Cell Phone: (310) 562-4572</Dropdown.Item>
        </DropdownButton>

      <a href="https://www.linkedin.com/in/kevin-miller-phd-1b197986/" ><Image src={require('../assets/images/LI-In-Bug.png')} fluid style={styles.linkedIn} /></a>

      <a href="https://github.com/Koldenblue"><Image src={require('../assets/images/gitMark32.png')} fluid style={styles.git} /></a>
    </>
  )
}

export default HubLink;