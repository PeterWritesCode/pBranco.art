import React from "react";

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
          <div className="container-content left" style={style_first}>
            {numbers.map(i => (
              <div key={i} className="container-content-block">
                LEFT {i}
              </div>
            ))}
          </div>
        </section>
        <section className="main_items_container_child">
          <div className="container-content right" style={style_second}>
            {numbers.map(i => (
              <div key={i} className="container-content-block">
                RIGHT {i}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default MainItemsContainer;
