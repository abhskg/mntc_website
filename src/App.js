import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel';
import Header from './components/header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <h1>Our Events</h1>
      </div>
    );
  }
}

export default App;
