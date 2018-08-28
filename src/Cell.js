import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeCellColor = () => {
    let newColor = this.props.getColor()
    this.setState({color: newColor})
  }

  render() {
    return (
      <div onClick={this.changeCellColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
