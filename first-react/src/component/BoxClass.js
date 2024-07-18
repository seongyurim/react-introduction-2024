import React, { Component } from 'react'

export default class BoxClass extends Component {
  componentWillUnmount() {
    console.log("Bye! BoxClass has been elimanated!");
  }
  render() {
    return (
      <div>Box{this.props.num}</div>
    )
  }
}
