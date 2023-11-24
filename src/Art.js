import {useEffect, useState, useCallback} from "react";

import MainItemsContainer from "./MainItemsContainer";
import jquery from "jquery";


import "./Art.css";

export default function Art() {
  
  
  const [deltaY, setDeltaY] = useState(0)
  const [maxDelta, setMaxDelta] = useState(0)

  

  const scrollHandler = useCallback(event => {
    setDeltaY(currentDeltaY => {
      let newDeltaY = currentDeltaY + event.deltaY*0.5;

      newDeltaY = Math.max(0, newDeltaY);
      newDeltaY = Math.min(maxDelta, newDeltaY);

      return newDeltaY;
    });
  }, [maxDelta])

  useEffect(() => {
    window.addEventListener("wheel", scrollHandler);

    const maxDelta = jquery(".container-content").height() - window.innerHeight;

    setMaxDelta(maxDelta);

    return () => {
      window.removeEventListener("wheel", scrollHandler);
    }
  }, [scrollHandler])

  let style_first = {
    transform: `translateY(-${maxDelta - deltaY}px)`
  };

  let style_second = {
    transform: `translateY(-${deltaY}px)`
  };

  return (
    <div className="App">
      <MainItemsContainer styleFirst={style_first} styleSecond={style_second}/>
      
    </div>
  )
}