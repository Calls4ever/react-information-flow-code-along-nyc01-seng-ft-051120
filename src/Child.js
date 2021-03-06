import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  
  render() {
    
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.childColor}}
      onClick={this.props.handleColorChange}></div>
    )
  }
}

export default Child
