import React from "react";
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import Ball from "../components/Ball";

export default function BallContainer2() {
  return (<>

    {/* right side */}
    <Ball
      left='65%'
      offset='.5'
      speed='.48'
      padding='45'
      color='#72e9ff'
    />
    <Ball
      left='60%'
      offset='.55'
      speed='.64'
      padding='60'
      color='#72e9ff'
    />
    <Ball
      left='50%'
      offset='.6'
      speed='.4'
      padding='40'
      color='#72e9ff'
    />
    <Ball
      left='75%'
      offset='.62'
      speed='.33'
      padding='20'
      color='#72e9ff'
    />
    <Ball
      left='88%'
      offset='.06'
      speed='.33'
      padding='44'
      color='#72e9ff'
    />
    <Ball
      left='95%'
      offset='.62'
      speed='.38'
      padding='20'
      color='#72e9ff'
    />
    <Ball
      left='85%'
      offset='.42'
      speed='.4'
      padding='32'
      color='#fccbf4'
    />


    {/* left side */}
    <Ball
      left='40%'
      offset='.40'
      speed='.40'
      padding='47'
      color='#72e9ff'
    />
    <Ball
      left='30%'
      offset='.52'
      speed='.57'
      padding='55'
      color='#72e9ff'
    />
    <Ball
      left='18%'
      offset='.7'
      speed='.6'
      padding='48'
      color='#fccbf4'
    />
    <Ball
      left='15%'
      offset='.64'
      speed='.33'
      padding='18'
      color='#fccbf4'
    />
    <Ball
      left='9%'
      offset='.72'
      speed='.5'
      padding='39'
      color='#72e9ff'
    />
    <Ball
      left='3%'
      offset='.62'
      speed='.4'
      padding='29'
      color='#fccbf4'
    />
    <Ball
      left='24%'
      offset='.55'
      speed='.2'
      padding='15'
      color='#72e9ff'
    />
  </>)
}