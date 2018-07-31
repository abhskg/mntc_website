import React,{ Component } from 'react';
import Carousel from 'nuka-carousel';
import './carousel.css';

export default class extends React.Component {
    render() {
      return (
        <Carousel 
            // autoplay="true" 
            autoplayInterval="1500" 
            wrapAround="true"
            renderCenterLeftControls={({ previousSlide }) => (
                <i onClick={previousSlide} class="fa fa-chevron-left fa-2x"></i>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <i onClick={nextSlide} class="fa fa-chevron-right fa-2x"></i>
            )}
        >
         <div className="image-cont">
          <img src="assets/1.jpg" />
          <p className="image-desc">Image 1</p>
         </div>
         <div className="image-cont">
          <img src="assets/2.jpg" />
          <p className="image-desc">Image 2</p>
         </div>
         <div className="image-cont">
          <img src="assets/4.jpg" />
          <p className="image-desc">Image 2</p>
         </div>
        </Carousel>
      );
    }
  }
