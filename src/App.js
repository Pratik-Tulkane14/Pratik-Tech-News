import React, { Component } from 'react'
import Navbar from './Component.js/Navbar';
import News from './Component.js/News';

export default class App extends Component {
 
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={6}/>
      </div>
    )
  }
}
