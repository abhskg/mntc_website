import React,{ Component } from 'react';
import Card from './card';
import './css/body.css';

class Body extends Component{
    render(){
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
            <div className="site_body">
                <h1>About Us</h1>
                <div className='card_holder'>
                    {contents.map((item, index) =>(
                        <Card 
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Body;