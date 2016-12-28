import React from 'react'
import axios from 'axios'
import PostList from './postlist'

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      text: "Initial", 
    };
  }
  getData () {
    console.log(this);
    axios.get("/db").then((response) => {
      console.log(response);
      this.setState ({text: response.data.result[0].text})
    });
  }
  render () {
    return (
      <div>
        <h1>Wedding App</h1>
        <p>{this.state.text}</p>
        <button onClick={this.getData.bind(this)}>Get Data</button>
        <PostList></PostList>
      </div>
    )
  }
}
