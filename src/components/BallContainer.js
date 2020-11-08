import React from "react";
import Ball from "../components/Ball";

export default function BallContainer() {
  return (<>

    {/* right side */}
    <Ball
      left='85%'
      offset='.5'
      speed='.48'
      padding='45'
      color='seagreen'
    />
    <Ball
      left='80%'
      offset='.55'
      speed='.64'
      padding='60'
      color='seagreen'
    />
    <Ball
      left='70%'
      offset='.6'
      speed='.4'
      padding='40'
      color='seagreen'
    />
    <Ball
      left='75%'
      offset='.65'
      speed='.3'
      padding='20'
      color='seagreen'
    />
    <Ball
      left='90%'
      offset='.62'
      speed='.38'
      padding='35'
      color='seagreen'
    />

    {/* left side */}
    <Ball
      left='20%'
      offset='.40'
      speed='.40'
      padding='47'
      color='seagreen'
    />
    <Ball
      left='14%'
      offset='.52'
      speed='.57'
      padding='55'
      color='seagreen'
    />
    <Ball
      left='3%'
      offset='.7'
      speed='.6'
      padding='48'
      color='seagreen'
    />
    <Ball
      left='15%'
      offset='.64'
      speed='.33'
      padding='18'
      color='seagreen'
    />
    <Ball
      left='9%'
      offset='.72'
      speed='.5'
      padding='39'
      color='seagreen'
    />
        <Ball
      left='24%'
      offset='.55'
      speed='.2'
      padding='15'
      color='seagreen'
    />
  </>)
}