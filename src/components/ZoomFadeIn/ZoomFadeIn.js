import React, { useState, useContext } from "react";
import './ZoomFade.css'
import ZoomFadeContext from './ZoomFadeContext';
import ZoomImage from "./ZoomImage";

// ================ INSTRUCTIONS FOR IMAGE ZOOM COMPONENTS ==============================
// to use these files, need to wrap everything in the context provider, ZoomFadeContext, in the higher order component
/* Add in:
import ZoomFadeIn from '../components/ZoomFadeIn/ZoomFadeIn';
import ZoomFadeContext from '../components/ZoomFadeIn/ZoomFadeContext';

    <ZoomFadeContext.Provider value={{currentlyZoomed, setCurrentlyZoomed}}>
      {wrapped content}
      <ZoomFadeIn>
        {IMAGE}
      </ZoomFadeIn>
    </ZoomFadeContext>
*/
// Edit styles as appropriate, in BOTH the CSS and inline styles
/* If large image is diff from small image, set the diffZoomedImage={true} attribute on <ZoomFadeIn>
 then wrap the two images. The small image will have smimg={true}
 and the large image will be lgimg={true} */
// ========================================================================================

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

  // default css class, which triggers a slight zoom on hover. 
  // To use the custom gifHoverClass, set gifHover attribute = true, and gifHoverClass to a custom class
  let hoverClass = 'zoom-card-img-top';


  let imgFade = () => {
    setDisp('none');
    setCurrentlyZoomed(false);
    window.removeEventListener("click", imgFade);
  }


  // if large image is different from small image, return appropriate images
  if (props.diffZoomedImage) {
    return (
      <>
        <ZoomImage
          disp={disp}
          zoomedChild={props.children.filter((index) => {
            return (index.props.lgimg === 'true')
          })}
        />
        <div className={props.diffHover ? props.diffHoverClass : hoverClass} onClick={imgZoom}>
          {props.children.filter((index) => {
            return (index.props.smimg === 'true')
          })}
        </div>
      </>
    )
  }
  
  else {
    return (
      <>
        <ZoomImage
          disp={disp}
          zoomedChild={props.children}
        />
        <div className={props.diffHover ? props.diffHoverClass : hoverClass} onClick={imgZoom} >
          {props.children}
        </div>
      </>
    )
  }
}

export default ZoomFadeIn;