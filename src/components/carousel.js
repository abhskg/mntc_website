import React, { Component } from 'react';
import './carousel.css';
import one from '../static/images/1.jpg';
import two from '../static/images/2.jpg';
import three from '../static/images/3.jpg';
import four from '../static/images/4.jpg';
import five from '../static/images/5.jpg';

// console.log(logo);

class Carousel extends Component {
	render() {
			return (
				<div className="image_carousel"> 

					<input type="radio" name="images" id="i1"/>
					<input type="radio" name="images" id="i2"/>
					<input type="radio" name="images" id="i3"/>
					<input type="radio" name="images" id="i4"/>
					<input type="radio" name="images" id="i5"/>

					<div className="slide_img" id="one">
						<img src={one} alt="one"/>
						<label for="i5" class="pre"></label>
						<label for="i2" class="nxt"></label>
						
					</div>
					<div className="slide_img" id="two">
						<img src={two} alt="two"/>
						<label for="i1" class="pre"></label>
						<label for="i3" class="nxt"></label>

					</div>
					<div className="slide_img" id="three">
						<img src={three} alt="three"/>
						<label for="i2" class="pre"></label>
						<label for="i4" class="nxt"></label>

					</div>
					<div className="slide_img" id="four">
						<img src={four} alt="four"/>
						<label for="i3" class="pre"></label>
						<label for="i5" class="nxt"></label>

					</div>
					<div className="slide_img" id="five">
						<img src={five} alt="five"/>
						<label for="i4" class="pre"></label>
						<label for="i1" class="nxt"></label>

					</div>

					<div className="nav">
						<label for="i1" class="dots"></label>
						<label for="i2" class="dots"></label>
						<label for="i3" class="dots"></label>
						<label for="i4" class="dots"></label>
						<label for="i5" class="dots"></label>
					</div>
				</div>
			);
		}
	}

export default Carousel;
