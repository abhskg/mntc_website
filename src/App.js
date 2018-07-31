import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel';


class App extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <h1>Our Events</h1>
      </div>
    );
  }
}

export default App;
