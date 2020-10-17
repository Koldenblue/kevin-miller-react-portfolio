import { createContext, useState } from 'react';

const ZoomFadeContext = createContext({
  currentlyZoomed: false,
  setCurrentlyZoomed: () => {},
  opacity: 0,
  setOpacity: () => {}
})

export default ZoomFadeContext;