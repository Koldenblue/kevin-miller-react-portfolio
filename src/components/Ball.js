import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

function Ball(props) {

  let styles = {
    ball: {
      backgroundColor: props.backgroundColor,
      // padding: `${props.padding + (toggle ? 50 : 0)}px`,
      padding: `${props.padding}px`,
      height: '50px',
      width: `50px`,
      borderRadius: '1000px',

    }
  }

  return (
    <>
        <ParallaxLayer offset={props.offset} speed={props.speed} style={{left:props.left}} >
          <div style={styles.ball} ></div>
        </ParallaxLayer>
    </>
  )
}

export default Ball;