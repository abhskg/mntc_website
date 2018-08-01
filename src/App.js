import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
