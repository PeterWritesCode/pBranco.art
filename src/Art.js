import React from "react";
import ReactDOM from "react-dom";
import MainItemsContainer from "./MainItemsContainer";
import jquery from "jquery";
import art from "./media/art.png";
import name from "./media/name.png";
import mini from "./media/mini.png";
import comms from "./media/comms.png";
import about from "./media/about.png";
import contacts from "./media/contacts.png";
import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Art.css";

class Art extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      deltaY: 0,
      maxDelta: 0
    };
  }

  componentDidMount() {
    // ... existing code

    // The navigate function is now available through this.props
    
  }
  
  componentDidMount() {
    // IE, Chrome, Safari, Opera
    window.addEventListener("wheel", this.scrollHandler);

    // Firefox
    window.addEventListener("DOMMouseScroll", this.scrollHandler);

    const maxDelta = jquery(".container-content").height() - window.innerHeight;

    this.setState({
      maxDelta
    });

    jquery(".container-content.left").css(
      "transform",
      `translateY(-${jquery(".container-content").height()}px)`
    );

    this.navigate = this.props.history.push;
  }

  scrollHandler = event => {
    
    this.setState(state => {
      let newDeltaY = state.deltaY + event.deltaY;

      newDeltaY = Math.max(0, newDeltaY);
      newDeltaY = Math.min(this.state.maxDelta, newDeltaY);

      return {
        deltaY: newDeltaY
      };
    });
   
  };
 
  

  render() {
    
    
    

    return (
      
      <div className="App">
        <MainItemsContainer {...this.state} />
        <div className="Container">
          <div className="art" onClick={() => this.navigate("/art")}>
            <img alt="art" className="art" draggable="false" src={art}></img>
          </div>
          <div className="mini  " onClick={() => this.navigate("/miniatures")}>
            <img alt="mini" className="mini" draggable="false" src={mini}></img>
          </div>
          <div className="comms" onClick={() => this.navigate("/commissions")}>
            <img alt="comms" className="comms" draggable="false" src={comms}></img>
          </div>
          <div className="about" onClick={() => this.navigate("/about")}>
            <img alt="about" className="about" draggable="false" src={about}></img>
          </div>
          <div className="contacts" onClick={() => this.navigate("/contacts")}>
            <img alt="contacts" className="contacts" draggable="false" src={contacts}></img>
          </div>
      </div>
      </div>
      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Art />, rootElement);

export default withRouter(Art);