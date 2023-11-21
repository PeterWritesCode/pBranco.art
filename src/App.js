import React from "react";
import Draggable from "react-draggable";
import videoBG from "./media/mountains.mp4";
import art from "./media/art.png";
import name from "./media/name.png";
import mini from "./media/mini.png";
import comms from "./media/comms.png";
import about from "./media/about.png";
import contacts from "./media/contacts.png";
import { useNavigate } from "react-router-dom";
import Art from "./Art";
import "./App.css";


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

  function onClickArt(e) {
    if (!isDragging) {
      navigate("/art")
    }
  }
  function onClickMinis(e) {
    if (!isDragging) {
      navigate("/miniatures")
    }
  }
  
  function onClickComms(e) {
    if (!isDragging) {
      navigate("/commissions")
    }
  }
  function onClickContacts(e) {
    if (!isDragging) {
      navigate("/contacts")
    }
  }
  function onClickAbout(e) {
    if (!isDragging) {
      navigate("/about")
    }
  }

  return (
    <div className="App">
      <video src={videoBG} autoPlay loop muted/>
    
      <div className="Titulo">
        <img draggable="false" className="name" src={name}></img>
      </div>

      <div className="Container">
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="art" onClick={onClickArt}>
            <img className="art" draggable="false" src={art}></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="mini  " onClick={onClickMinis}>
            <img className="mini" draggable="false" src={mini}></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="comms" onClick={onClickComms}>
            <img className="comms" draggable="false" src={comms}></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="about" onClick={onClickComms}>
            <img className="about" draggable="false" src={about}></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="contacts" onClick={onClickComms}>
            <img className="contacts" draggable="false" src={contacts}></img>
          </div>
        </Draggable>
      </div>
    </div>
  );
}