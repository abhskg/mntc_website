import React,{ Component } from 'react';
import './css/firstpage.css';
import logo from '../static/images/mntc.png';
import Carousel from './carousel';
import AOS from 'aos'

// function goToUrl(){
//     window.location = '/team';
// }

class FirstPage extends Component {
    x
    render(){
        AOS.init({
            duration : 3000
        }
        );
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
        let contents=[
            {
                'title':'Who we are ?',
                'content':'Mathematics,an abstract science of numbers, quantity and space, has held its place as prerequisite to flourish in today\'s world. At Maths N Tech Club, we realize the importance of analytical reasoning and rational thinking and hence organize a plethora of events which kindle student\'s interest in maths and the thirst of knowledge.'
            },
            {
                'title':'Story of Timeline',
                'content': 'Established in 2004, our club was set up with the motive of creating a platform for mathematical fervor through a multitude of challenges.'
            },
            {
                'title':'How we do it ?',
                'content': 'With the kind of support from our faculty and team members, MNTC has reached greater heights with every passing year. Our annual knowledge fest always keeps its promise to be the most happening fest for the inquisitive student minds.'
            }
        ]
        return(
            <div>
                <div className="firstpage-header">
                    <div className="firstpage-navbar">
                        <a className="firstpage-logo" href="/">
                            <img src={logo}/>    
                        </a> 
                        <div className='buttons_group'>
                            {NavbarItems.map((item, index) =>(
                                <button className="firstpage-navbar-button" key={index} >
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
                <Carousel />
                <div className="aboutus">
                    <h1>About Us</h1>
                    <div data-aos='fade-up' className='aboutus-desc'>
                        {contents.map((item, index) =>(
                            <div className='aboutus-card'>
                                <h1>{item.title}</h1>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstPage;