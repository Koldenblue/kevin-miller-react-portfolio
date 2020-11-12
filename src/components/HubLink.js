import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function HubLink() {
  const [dropDir, setDropDir] = useState('left');
  const [width, setWidth] = useState(window.innerWidth)


  let allowResize = true;
  useEffect(() => {
    function handleResize() {
      if (allowResize) {
        allowResize = false;
        setTimeout(() => {
          setWidth(window.innerWidth)
          allowResize = true;
        }, 10)
      }
    }
    window.addEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if (width < 991) {
      setDropDir('right');
    } else {
      setDropDir('left');
    }
  }, [width])

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
      <DropdownButton className='dropdown' title='Contact' drop={dropDir} variant="info" id="dropdown-contact">
        <Dropdown.Item disabled>Email: klmille@gmail.com</Dropdown.Item>
        <Dropdown.Item disabled>Cell Phone: (310) 562-4572</Dropdown.Item>
      </DropdownButton>

      <a href="https://www.linkedin.com/in/kevin-miller-phd-1b197986/" ><Image src={require('../assets/images/LI-In-Bug.png')} fluid style={styles.linkedIn} /></a>

      <a href="https://github.com/Koldenblue"><Image src={require('../assets/images/gitMark32.png')} fluid style={styles.git} /></a>
    </>
  )
}

export default HubLink;