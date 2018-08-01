import React,{ Component } from 'react';
import Carousel from 'nuka-carousel';
import './css/carousel.css';

export default class extends React.Component {
    render() {
        let carouselItems = [
            {
                'name': '1.jpg',
                'caption': "Image 1"
            },
            {
                'name': '2.jpg',
                'caption': "Image 2"
            },
            {
                'name': '4.jpg',
                'caption': "Image 3"
            }
        ]
      return (
        <Carousel 
            autoplay="true" 
            autoplayInterval="1500" 
            wrapAround="true"
            renderCenterLeftControls={({ previousSlide }) => (
                <i onClick={previousSlide} class="fa fa-chevron-left fa-2x"></i>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <i onClick={nextSlide} class="fa fa-chevron-right fa-2x"></i>
            )}
        >
            {carouselItems.map((item, index) => (
                <div className="image-cont" key={index}>
                    <img src={"assets/" + item.name} />
                    <p className="image-desc">{item.caption}</p>
                </div>
            ))}
        </Carousel>
      );
    }
  }
