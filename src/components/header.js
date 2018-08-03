import React,{ Component } from 'react';
import './css/header.css';
import logo from '../static/images/mntc.png';

// function goToUrl(){
//     window.location = '/team';
// }

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
                    <div className='buttons_group'>
                        {NavbarItems.map((item, index) =>(
                            <button className="navbar_button" key={index} >
                                <span>
                                    <div>
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