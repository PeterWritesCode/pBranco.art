import React, {useState} from "react";
import Draggable from "react-draggable";
import videoBG from "./media/carantonha.mp4";
import art from "./media/art.png";
import name from "./media/name.png";
import mini from "./media/mini.png";
import comms from "./media/comms.png";
import about from "./media/about.png";
import contacts from "./media/contacts.png";
import close from "./media/close.png";
import { useNavigate } from "react-router-dom";
import Art from "./Art";
import "./App.css";


export default function App() {
  const navigate = useNavigate();
  
  const [modal, setModal] = useState(false);
  const [modalAbout, setModalAb] = useState(false);
  let isDragging = false;
  
  const toggleModalAb = () => {
    if(!isDragging){
      setModalAb(!modalAbout);
    }
  }

  const toggleModal = () => {
    if(!isDragging){
      setModal(!modal);
    }
      
  }

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

  function onClickClose(e) {
    if (!isDragging) {
      toggleModal();
    }
  }
  function onClickCloseAb(e) {
    if (!isDragging) {
      toggleModalAb();
    }
  }


  function onClickAbout(e) {
    if (!isDragging) {
      toggleModalAb();
    }
  }

  return (
    <div className="App">
      <video src={videoBG} autoPlay loop muted/>
    
      
      
      <div className="Container">
      <div className="Titulo">
        <img draggable="false" className="name" src={name}></img>
      </div>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="artd" onClick={onClickArt}>
            <img className="art" draggable="false" src={art}></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="minid" onClick={onClickMinis}>
            <img className="mini" draggable="false" src={mini}></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="commsd" onClick={onClickComms}>
            <img className="comms" draggable="false" src={comms}></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="aboutd" onClick={onClickAbout}>
            <img className="about" draggable="false" src={about}></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="contactsd" onClick={toggleModal}>
            <img className="contacts" draggable="false" src={contacts}></img>

          </div>
        </Draggable> 
        {modal && (
          <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="modal-content" >
            <img className="modal-contacts" alt="modal-contacts" draggable="false" src={contacts}></img>
            
            <text >
              
              <strong>E-mail:</strong><br></br> pedrombrancomendes@gmail.com
              <br></br>
              <a href="https://www.instagram.com/pbrancoart"><strong>Instagram:</strong><br></br> @pbrancoart</a>
              <br></br>
              <strong>LinkedIn:</strong><br></br> pedro-branco-mendes
              
            </text>
            <div className="close-div" onClick={onClickClose} >
            <img className="close" draggable="false" src={close}></img>
            </div>
          </div>
          </Draggable>
        )}
        {modalAbout && (
          <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="modal-content-about">
            <img className="modal-about" alt="modal-about" draggable="false" src={about}></img>
            
            <text>
            <br></br>
            <strong>Hey! I am Pedro.</strong><br></br>

I am from Portugal, currently 22.<br></br>
I am an artist, currently studying for my Masters in Design and Multimedia in University of Coimbra, from which I have already gotten a Bachelor's in Informatics Engineering.
<br></br>I love comics, books, drawing, Warhammer and anything miniatures related.
<br></br>In the future, I hope that the last page of my books say that I am happy and live with a beautiful wife and a dog, like all the legends do.
              
            </text>
            <div className="close-div" onClick={onClickCloseAb} >
            <img className="close" draggable="false" src={close}></img>
            </div>
          </div>
          </Draggable>
        )}
        
        
      </div>
    </div>
  );
}