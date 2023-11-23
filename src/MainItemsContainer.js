import React from "react";
import capa from "./media/comic/Capa.jpg"
import cabra40 from"./media/comic/CAPA TOP ZIXO.png";
import tacho from "./media/comic/cartoon.jpg";
import smtuc from "./media/comic/smtuc.png";
import twd from "./media/comic/1690906335597.png";
import spider from "./media/comic/1690906012585.png";

class MainItemsContainer extends React.Component {
  render() {
    console.log(this.props.deltaY);
    let style_first = {
      transform: `translateY(-${this.props.maxDelta - this.props.deltaY}px)`
    };

    let style_second = {
      transform: `translateY(-${this.props.deltaY}px)`
    };

    const numbers = [];
    for (let i = 0; i < 30; i++) {
      numbers.push(i + 1);
    }

    return (
      <div className="main_items_container">
        <section className="main_items_container_child">
          <div className="container-content left"  style={style_first}>
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
          <div className="container-content right" style={style_second}>
           
            
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
      </div>
    );
  }
}

export default MainItemsContainer;
