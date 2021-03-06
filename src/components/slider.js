import React, { Component } from 'react';
import './css/slider.css';

class Slider extends Component {
    constructor(props)
    {
        super(props);

    }
    render(){
        return (
                <div className="slider">
                    {/* {
                        slideImages.map((Item,index)=>(
                            <input type="radio" name="slide_switch" id="id1"/>
                            <label for="id1">
                                <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg" width="100"/>
                            </label>
                            <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"/>
                        ));
                    } */}
                    <input type="radio" name="slide_switch" id="id1"/>
                    <label for="id1">
                        <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"/>
                    
                    {/* <!--Lets show the second image by default on page load--> */}
                    <input type="radio" name="slide_switch" id="id2" />
                    <label for="id2">
                        <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg"/>
                    
                    <input type="radio" name="slide_switch" id="id3"/>
                    <label for="id3">
                        <img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg"/>
                    
                    <input type="radio" name="slide_switch" id="id4"/>
                    <label for="id4">
                        <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg"/>
                    
                    <input type="radio" name="slide_switch" id="id5"/>
                    <label for="id5">
                        <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"/>
                </div>
        )
    }
}

export default Slider;