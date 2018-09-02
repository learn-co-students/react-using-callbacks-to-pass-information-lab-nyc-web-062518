import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick(e) {
    this.props.triggerMatrixCellMethod(this)
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={e => this.handleClick(e)}>
      </div>
    )
  }
}
