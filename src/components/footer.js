import React,{ Component } from 'react';
import './css/footer.css';
import logo from '../static/images/mntc.png';
import facebook from '../static/images/svg/facebook.svg';
import youtube from '../static/images/svg/youtube.svg';
import instagram from '../static/images/svg/instagram.svg';
import gmail from '../static/images/svg/google-plus.svg';

class Footer extends Component{
    render(){
        var socialSites=[
            {
                'loc': facebook,
                'name':'facebook',
                'address':''
            },
            {
                'loc':youtube,
                'name':'youtube',
                'address':''
            },
            {
                'loc':instagram,
                'name':'instagram',
                'address':''
            },
            {
                'loc':gmail,
                'name':'gmail',
                'address':''
            }
        ]
        return(
            <div className='site_footer'>
                <img src={logo} title='mntc'/>
                <div className='footer_info'>
                    <p>Stay Connected</p>
                    <div className='social_icons'>
                        <div style={{ 'margin':'0 auto' , 'display':'flex'}}>
                        {socialSites.map((items, index) =>(
                            <div className='icon' key={index} >
                                <a href={items.address} title={items.name}>
                                    <img src={items.loc} />
                                </a>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <hr/>
                <p className='credit_text'>Developed by tantrojan &#9400;</p>
            </div>
        );
    }
}

export default Footer;