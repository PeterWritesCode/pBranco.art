import React from "react";
import capa from "./media/comic/Capa.jpg"
import cabra40 from"./media/comic/CAPA TOP ZIXO.png";
import tacho from "./media/comic/cartoon.jpg";
import smtuc from "./media/comic/smtuc.png";
import twd from "./media/comic/1690906335597.png";
import spider from "./media/comic/1690906012585.png";
import name from "./media/name.png";
import art from "./media/art.png";
import mini from "./media/mini.png";
import comms from "./media/comms.png";
import about from "./media/about.png";
import contacts from "./media/contacts.png";
import Draggable from "react-draggable";

import { useNavigate } from "react-router-dom";


export default function MainItemsContainer(props){
  let isDragging = false;
  const navigate = useNavigate();

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
  function onClickIndex(e) {
    if (!isDragging) {
      navigate("/")
    }
  }


  return (
      <div className="main_items_container">
        <section className="main_items_container_child">
          <div className="container-content left"  style={props.styleFirst}>
          <div className="container-content-block">
              <img className="smtuc" draggable="false"src={smtuc}></img>
            </div>
          <div className="container-content-block">
              <img className="spider" draggable="false"src={spider}></img>
            </div>
          <div className="container-content-block">
              <img className="twd" draggable="false"src={twd}></img>
            </div>
          
            <div className="container-content-block">
              <img className="tacho" draggable="false"src={tacho}></img>
            </div>
            <div className="container-content-block">
              <img className="cabra40"draggable="false" src={cabra40}></img>
            </div>
            <div className="container-content-block">
              <img className="comic"draggable="false" src={capa}></img>
            </div>
            
              
          </div>
        </section>
        <section className="main_items_container_child">
          <div className="container-content right" style={props.styleSecond}>
           
            
            <div className="container-content-block">
            <text><strong><span style={{color: "#ed2124"}}>MERCY</span></strong>, written and illustrated by Pedro Branco is a horror/thriller short comic taking place a year (or so thinks the main character) after a zombie outbreak. 
             <br></br>Join Jo and Arthur as they manage their way through a small issue: One of them is sick, and the only place where they can find medicine has rumours of being perilous.
            </text>
             </div>
            <div className="container-content-block">
              <text>Cover made for <strong>Jornal Universitário A Cabra's 40th Anniversary edition.</strong> "Cabra" in portuguese refers to the female goat, so the badass-looking character in the cover, is wearing the female version of the university uniform. The cake pops with the colors of the event, while the rest is in black and white to contrast. <br></br>The background features old covers of the newspaper.</text>
            </div>
            <div className="container-content-block">
              <text>Cartoon criticizing <strong>Associação Académcia de Coimbra</strong>, commenting on their greediness regarding the prices of the student fests.</text>
            </div>
            <div className="container-content-block">
              <text>Fan-Art illustration of Rick and Carl Grimes from <strong>The Walking Dead</strong></text>
            </div>
            <div className="container-content-block">
              <text>
                  Fan-Art illustration of <strong>Spider-Man</strong>.
              </text>
            </div>
            <div className="container-content-block">
              <text>Cartoon criticizing the poor conditions of the old and overworn buses used by <strong>Serviços Municipalizados de Transportes Urbanos de Coimbra </strong>(SMTUC)</text>
            </div>
            
          </div>
        </section>
        <div className="ContainerD" >
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="artdD" onClick={onClickArt}>
            <img className="artD" draggable="false" src={art} alt="art"></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="minidD" onClick={onClickMinis}>
            <img className="miniD" draggable="false" src={mini} alt="mini"></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="commsdD" onClick={onClickComms}>
            <img className="commsD" draggable="false" src={comms} alt="comms"></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="aboutdD" onClick={onClickAbout}>
            <img className="aboutD" draggable="false" src={about}alt="about"></img>
          </div>
        </Draggable>
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="contactsdD" onClick={onClickContacts}>
            <img className="contactsD" draggable="false" src={contacts} alt="contacts"></img>
          </div>
        </Draggable> 
        <Draggable onStop={onStop} onDrag={onDrag}>
          <div className="namedD" onClick={onClickIndex}>
            <img className="nameD" draggable="false" src={name} alt="name"></img>
          </div>
        </Draggable> 
        </div>
        
      </div>
  )
}
