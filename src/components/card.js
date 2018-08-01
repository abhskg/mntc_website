import React,{ Component } from 'react';
import './css/card.css';

class Card extends Component{
    render(){
        return(
            <div className="card">
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Card;