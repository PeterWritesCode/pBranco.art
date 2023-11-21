import React from "react";
import ReactDOM from "react-dom";
import MainItemsContainer from "./MainItemsContainer";
import jquery from "jquery";

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
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Art />, rootElement);

export default Art;