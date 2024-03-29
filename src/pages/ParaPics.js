import React from "react";
import Background from "../components/Background";
import Image from "react-bootstrap/Image";
import { ParallaxLayer } from 'react-spring/renderprops-addons';
// import { useSpring, animated } from 'react-spring'
import SeparatorBar from "../components/SeparatorBar";
import BallContainer from "../components/BallContainer";
import BallContainer2 from "../components/BallContainer2";

export default function ParaPics() {

  return (<>
    <ParallaxLayer className='photos-title titleP' offset={0} speed={0.2} >
      <p>P</p>
    </ParallaxLayer>
    <ParallaxLayer className='photos-title titleH' offset={0} speed={.6} >
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
    </ParallaxLayer>


    {/* <ParallaxLayer offset={.9} speed={0} >
      <Image  src={require('../assets/images/clouds-border.png')} />
    </ParallaxLayer> */}

    <ParallaxLayer offset={.95} speed={.1} >
      {/* note that subsequent images in the code will be placed more toward foreground */}
      <Image id='exploding-brain' src={require('../assets/images/man-1920.jpg')} />

      <ParallaxLayer offset={0.01} speed={0} >
        <Image className='para-bg' src={require('../assets/images/landscape-1920.jpg')} />
        <ParallaxLayer offset={0.05} speed={0.05} >
          <SeparatorBar type='green' />
        </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={0.03} speed={0.05} >
        <SeparatorBar type='purple' />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={.8} >
        <Image id='sunn-pic' className='parapics' src={require("../assets/images/guitar3.jpg")} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.95} speed={1.6} >
        <Image id='namm-pic' className='parapics' src={require("../assets/images/namm.JPG")} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={.7} >
        <Image id='para-prof-pic' className='parapics' src={require("../assets/images/prof-photo-2.png")} />
      </ParallaxLayer>
    </ParallaxLayer>


    <ParallaxLayer offset={0} speed={0} >
      <Background image='../assets/images/shore.jpg' />
    </ParallaxLayer>

    <ParallaxLayer offset={1.0} speed={.7} >
      <Image className='parapics' id='saskia-pic' src={require("../assets/images/saskia2.JPG")} />
    </ParallaxLayer>

    <ParallaxLayer offset={1.7} speed={.3} >
      <BallContainer />
    </ParallaxLayer>

    <ParallaxLayer offset={4} speed={.3} >
      <BallContainer2 />
    </ParallaxLayer>

    <ParallaxLayer offset={3.3} speed={0} >
      <Image className='parapics' id='diploma' src={require("../assets/images/diploma.png")} />
    </ParallaxLayer>

    <ParallaxLayer offset={3} speed={0.1} >
      <Image className='parapics' id='flower-pic' src={require("../assets/images/flowers-1920.png")} />
    </ParallaxLayer>

    {/* <ParallaxLayer offset={3} speed={.7} >
      <Image className='parapics' src={require("../assets/images/self2.jpg")} />
    </ParallaxLayer>



    <ParallaxLayer offset={5} speed={.7} >
      <Image className='parapics' src={require("../assets/images/dissertation-page.png")} />
    </ParallaxLayer> */}

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





