import { createContext, useState } from 'react';

const ZoomFadeContext = createContext({
  // const [currentlyZoomed, setCurrentlyZoomed] = useState(false)
  currentlyZoomed: false
})

export default ZoomFadeContext;