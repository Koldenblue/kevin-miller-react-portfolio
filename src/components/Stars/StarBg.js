import React from 'react';
import { useSpring, animated } from 'react-spring';
import range from 'lodash-es/range'
import './styles.css'
import Background from "../Background";

const items = range(1)
const interp = i => r => `translate3d(0, ${3 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0`

export default function StarBg() {

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 15000 },
    reset: true,
  })

  return (<>
    <Background image='../assets/images/tidepool.jpg' />

    <div id='star-bars'>
      {items.map(i => {
        return (<>
          <animated.div key={i} className="script-bf-box" style={{ transform: radians.interpolate(interp(i)) }} />
          <animated.div key={-i} className="script-bf-box-2" style={{ transform: radians.interpolate(interp(i)) }} />
        </>)
      })}

    </div>
  </>)
}

