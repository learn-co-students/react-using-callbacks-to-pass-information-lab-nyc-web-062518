
import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let setSelectedColor = () => {this.props.setColor(str)}
      return <div key={idx} className="color-swatch" onClick={setSelectedColor} style={{backgroundColor: str} }/>
    })
  )

  render() {
    return (
      <div id="colorSelector" setColor={this.props.setColor}>
        {this.makeColorSwatches()}
      </div>
    )
  }

}
