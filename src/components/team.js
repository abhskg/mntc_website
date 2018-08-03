import React,{ Component } from 'react';
import './css/body.css';
import './css/team.css';

class Team extends Component {
    render(){
        let fourthYear=[
            {
                'name':'Punit Drolia',
                'post':'President',
                'src': 'punit'
            },
            {
                'name':'Sahil Jaiswal',
                'post':'Convener',
                'src': 'sahil'
            },
            {
                'name':'Nidhi Kumar Yadav',
                'post':'General Secretary',
                'src': 'nidhi'
            },
            {
                'name':'Sudipto Mukherjee',
                'post':'Treasurer',
                'src': 'sudipto'
            },
            {
                'name':'Srinjoy Banerjee',
                'post':'Tech Head',
                'src': 'srinjoy'
            },
            {
                'name':'Afaque Alam',
                'post':'Ankshala Head & ',
                'src': 'afaque'
            },
            {
                'name':'Utkarsh Jaiswal',
                'post':'Assistant General Secretary',
                'src': 'utkarsh'
            },
            {
                'name':'Bhanu Prakash',
                'post':'Sponsorship Head',
                'src': 'bhanu'
            },
            {
                'name':'Shikha Kujur',
                'post':'Web-D Head',
                'src': 'shikha'
            },            {
                'name':'Ashutosh Kumar Ray',
                'post':'Logistics Head',
                'src': 'ashutosh'
            },
            {
                'name':'Shivansh Kumar Dubey',
                'post':'Logistics Head',
                'src': 'shivansh'
            },
            {
                'name':'Arnav',
                'post':'Creative Head',
                'src': 'arnav'
            },
            {
                'name':'Shaista Ambreen',
                'post':'Creative Head',
                'src': 'shaista'
            },
            {
                'name':'Vikas Kumar',
                'post':'Publicity Head',
                'src': 'vikas'
            },            
            {
                'name':'Iimon Tarun Taruki',
                'post':'Workshop Head',
                'src': 'iimon'
            },
            {
                'name':'Late Amit Kumar',
                'post':'',
                'src': 'amit'
            },
            {
                'name':'Bickey Singh',
                'post':'',
                'src': 'bickey'
            },
            {
                'name':'Charu Chandranshu',
                'post':'',
                'src': 'charu'
            },
            {
                'name':'Gaurav Kumar Singh',
                'post':'',
                'src': 'gaurav'
            },
            {
                'name':'R. Likhith',
                'post':'',
                'src': 'likhith'
            }
        ]
        return(
            <div className='site_body'>
                <h1>Our Team</h1>
                <hr/>
                <div className='card_holder'>
                    {
                        fourthYear.map((item, index) =>(
                            <div className="member_card" key={index}>
                                <div className='card_image'>
                                    <img src={"assets/team/" + item.src + ".jpg"} />
                                </div>
                                <h1>{item.name}</h1>
                                <p>{item.post}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Team;