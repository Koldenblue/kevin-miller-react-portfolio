import React, { useEffect, useState, useContext } from "react";
import './ZoomFade.css'
import ZoomFadeContext from './ZoomFadeContext';
import ZoomImage from "./ZoomImage";

function ZoomFadeIn(props) {
  const { currentlyZoomed, setCurrentlyZoomed } = useContext(ZoomFadeContext);
  const [disp, setDisp] = useState("none");

  let imgZoom = () => {
    if (!currentlyZoomed) {
      setCurrentlyZoomed(true);
      setDisp('block');
      setTimeout(() => {
        window.addEventListener("click", imgFade)
      }, 100)
    }
  }

  let imgFade = () => {
    setDisp('none');
    setCurrentlyZoomed(false);
    window.removeEventListener("click", imgFade);
  }

  return (
    <>
      <ZoomImage
        disp={disp}
        children={props.children}
        imgZoom={imgZoom}
      />
      <div className='card-img-top' onClick={imgZoom}>
        {props.children}
      </div>
    </>
  )
}

export default ZoomFadeIn;