import React from "react";
import Background from "../components/Background";
import Image from "react-bootstrap/Image";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { useSpring, animated } from 'react-spring'

export default function ParaPics() {

  let styles = {
    titleP: {
      marginTop: '8rem',
      left: '5rem'
    },
    titleH: {
      marginTop: '8rem',
      left: '10rem'
    },
    titleO: {
      marginTop: '8rem',
    },
    titleT: {
      marginTop: '8rem',
    },
    titleO2: {
      marginTop: '8rem',
    },
    titleS: {
      marginTop: '8rem',
    }
  }
  return (<>
    <ParallaxLayer className='photos-title titleP' offset={0} speed={0} >
      <p>P</p>
    </ParallaxLayer>
    <ParallaxLayer className='photos-title titleH' offset={0} speed={.5} >
      <p>H</p>
    </ParallaxLayer>
    <ParallaxLayer className='photos-title titleO' offset={0} speed={1.7} >
      <p>O</p>
    </ParallaxLayer>
    <ParallaxLayer className='photos-title titleT' offset={0} speed={.3} >
      <p>T</p>
    </ParallaxLayer>
    <ParallaxLayer className='photos-title titleO2' offset={0} speed={1} >
      <p>O</p>
    </ParallaxLayer>
    <ParallaxLayer className='photos-title titleS' offset={0} speed={.9} >
      <p>S</p>
    </ParallaxLayer>\

    <ParallaxLayer offset={.9} speed={0} >
      <Image  src={require('../assets/images/clouds-real.svg')} />
    </ParallaxLayer>

    {/* <ParallaxLayer offset={.9} speed={0} >
      <Image  src={require('../assets/images/clouds-border.png')} />
    </ParallaxLayer> */}

    <ParallaxLayer offset={0} speed={0} >
      <Background image='../assets/images/shore.jpg' />
    </ParallaxLayer>

    <ParallaxLayer offset={2} speed={.7} >
      <Image className='parapics' src={require("../assets/images/saskia2.JPG")} />
    </ParallaxLayer>
    
    <ParallaxLayer offset={1} speed={.5} >
      <Image className='parapics' src={require("../assets/images/guitar3.jpg")} />
    </ParallaxLayer>


    <ParallaxLayer offset={3} speed={.7} >
      <Image className='parapics' src={require("../assets/images/self2.jpg")} />
    </ParallaxLayer>

    <ParallaxLayer offset={4} speed={.7} >
      <Image className='parapics' src={require("../assets/images/diploma.png")} />
    </ParallaxLayer>

    <ParallaxLayer offset={5} speed={.7} >
      <Image className='parapics' src={require("../assets/images/dissertation-page.png")} />
    </ParallaxLayer>

  </>)
}


  // let styles = {
  //   titleP: {
  //     marginTop: '8rem',
  //     left: '5rem'
  //   },
  //   titleH: {
  //     marginTop: '8rem',
  //     left: '10rem'
  //   },
  //   titleO: {
  //     marginTop: '8rem',
  //   },
  //   titleT: {
  //     marginTop: '8rem',
  //   },
  //   titleO2: {
  //     marginTop: '8rem',
  //   },
  //   titleS: {
  //     marginTop: '8rem',
  //   }
  // }
  //       return (<>
    //     <ParallaxLayer className='photos-title' style={styles.titleP} offset={0} speed={0} >
    //       <p>P</p>
    // </ParallaxLayer>
  //   <ParallaxLayer className='photos-title' style={styles.titleH} offset={.1} speed={0} >
  //         <p>H</p>
  //   </ParallaxLayer>
  //   <ParallaxLayer className='photos-title' style={styles.titleO} offset={.2} speed={0} >
  //         <p>O</p>
  //   </ParallaxLayer>
  //   <ParallaxLayer className='photos-title' style={styles.titleT} offset={.3} speed={0} >
  //         <p>T</p>
  //   </ParallaxLayer>
  //   <ParallaxLayer className='photos-title' style={styles.titleO2} offset={.4} speed={0} >
  //         <p>O</p>
  //   </ParallaxLayer>
  //   <ParallaxLayer className='photos-title' style={styles.titleS} offset={.5} speed={0} >
  //         <p>S</p>
  //   </ParallaxLayer>




