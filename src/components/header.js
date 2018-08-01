import React,{ Component } from 'react';
import './css/header.css';
import logo from '../static/images/logo.png';

class Header extends Component {
    render(){
        let NavbarItems = [
            {
                'name': 'AboutUs'
            },
            {
                'name': 'Events'
            },
            {
                'name': 'Members'
            },
            {
                'name': 'Aavishkar'
            },
            {
                'name': 'Anveshan' 
            }
        ]
        return(
            <div className="site_header">
                <div className="site_navbar">
                    <a className="site_logo" href="/">
                        <img src={logo}/>    
                    </a> 
                    <div>
                        {NavbarItems.map((item, index) =>(
                            <button className="navbar_button" key={index} >
                                <span class="mat-button-wrapper">
                                    <div class="layout-row layout-align-start-center">
                                        <span>{item.name}</span>
                                    </div>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;