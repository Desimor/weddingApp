import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      text: "Initial", 
    };
  }
  render () {
    return (
      <div>
        <h1>Wedding App</h1>
        <p>{this.state.text}</p>
      </div>
    )
  }
}
