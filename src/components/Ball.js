import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

function Ball(props) {

  let styles = {
    ball: {
      // backgroundColor: 'black',
      // opacity: 'transparent',
      background: 'rgb(255,255,255)',
      // eslint-disable-next-line
      background: 'radial-gradient(circle, rgba(255,255,255,.5) 60%, rgba(46,139,87,.5) 100%)',
      borderColor: props.color,
      borderWidth: '1px',
      borderStyle: 'dashed',
      padding: `${props.padding}px`,
      height: '0px',
      width: `0px`,
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