import React, { useEffect, useState } from "react";
import './ZoomFade.css'

function ZoomImage(props) {
  const [opacity, setOpacity] = useState('0')

  const styles = {
    // the card style can be removed to set the card size equal to the column size on the grid
    img: {
      position: 'fixed',
      zIndex: '9999',
      top: '90px',
      left: '50%',
      height: '85%',
      width: 'auto',
      transform: 'translateX(-50%)',
      boxShadow: '5px 5px 5px black',
      transition: 'opacity 0.5s',
      display: props.disp,
      opacity: `${opacity}`
    }
  }


  useEffect(() => {
    console.log(props.disp)
    console.log(opacity)
    if (props.disp === 'block') {
      // maybe bad coding practice, but the only way I could figure out to set the opacity
      // after rendering the block display. As opposed to setting the opacity along with the block display
      // too quickly, then rendering, thus skippling the whole fade in transition.
      setTimeout(() => {
        setOpacity(1)
      }, 10)
    }
    else {
      setOpacity(0)
    }
  }, [props.disp])



  return (
    <>
      <div className='hidden-image' style={styles.img}>
        {props.children}
      </div>
    </>
  )
}

export default ZoomImage;