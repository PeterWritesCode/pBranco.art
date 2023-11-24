import React from "react";
import Draggable from "react-draggable";
import not from "./media/notyet.png";
import { useNavigate } from "react-router-dom";

import "./Not.css";

export default function App() {
    const navigate = useNavigate();
    let isDragging = false;
    
    function onDrag(e) {
      console.log("onDrag");
      isDragging = true;
    }
    function onStop(e) {
        console.log("onStop");
        setTimeout(() => (isDragging = false), 0);
      }
    function onClickNot(e) {
      if (!isDragging) {
        navigate("/");
      }
    }
  
    return (
        <div className="Not">
            <div className="ContainerNot">
                <Draggable onStop={onStop} onDrag={onDrag}>
                    <div   className="clickity" onClick={onClickNot}>
                        <img className="inotyet" draggable="false" alt="not" src={not}></img>
                    </div>
                </Draggable>
            </div>
        </div>
    );
}