import React from 'react';
import { useSpring, animated } from 'react-spring';
import range from 'lodash-es/range'
import './styles.css'

const items = range(20)
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function StarBg() {

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })

  return (
    <div id='star-bars'>
      {items.map(i => {
        if (i % 3 === 0) {
          return(<>
            <animated.div key={i} className="script-bf-box" style={{ transform: radians.interpolate(interp(i)) }} />
          </>)
        } 
        else {
          return (<>
            <div key={i} className="script-bf-none"/>
          </>)
        }
      })}

    </div>
  )
}

