import React, { useEffect, useState, useContext } from "react";
import './ZoomFade.css'
import ZoomFadeContext from './ZoomFadeContext';

function ZoomFadeIn(props) {
  // const [currentlyZoomed, setCurrentlyZoomed] = useState(false);
  const {currentlyZoomed, setCurrentlyZoomed, opacity, setOpacity} = useContext(ZoomFadeContext);
  
  const [disp, setDisp] = useState("none");
  // const [opacity, setOpacity] = useState('0')

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
      display: disp,
      opacity: `${opacity}`
    }
  }

  let imgZoom = () => {
    if (!currentlyZoomed) {
      setCurrentlyZoomed(true);
      setDisp('block');
      setTimeout(() => {
        window.addEventListener("click", imgFade)
      }, 100)
    }
  }

  // lets the image fade in upon a change in the display style from none to block
  useEffect(() => {
    if (disp === 'block') {
      setOpacity(1)
    }
    else {
      setOpacity(0)
    }
  }, [disp])

  let imgFade = () => {
    setDisp('none');
    setCurrentlyZoomed(false);
    window.removeEventListener("click", imgFade);
  }


  return (
    <>
      <div className='hidden-image' style={styles.img}>
        {props.children}
      </div>
      <div className='card-img-top' onClick={imgZoom}>
        {props.children}
      </div>
    </>
  )
}

export default ZoomFadeIn;