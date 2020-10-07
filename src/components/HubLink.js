import React from "react";
import Image from 'react-bootstrap/Image'

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
      <a href="https://www.linkedin.com/in/kevin-miller-phd-1b197986/" ><Image src={require('../assets/images/LI-In-Bug.png')} fluid style={styles.linkedIn} /></a>
      <a href="https://github.com/Koldenblue"><Image src={require('../assets/images/gitMark32.png')} fluid style={styles.git}/></a>
    </>
  )
}

export default HubLink;