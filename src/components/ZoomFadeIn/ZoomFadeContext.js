import { createContext, useState } from 'react';

const ZoomFadeContext = createContext({
  currentlyZoomed: false,
  setCurrentlyZoomed: () => {}
})

export default ZoomFadeContext;

// to use this file, need to wrap everything in the context provider, in the higher order component
// Set the states in the higher-order component, for opacity and currently zoomed
// import the context file and the zoomFadeIn file.
// wrap each image to be zoomed in the ZoomFadeIn wrapper