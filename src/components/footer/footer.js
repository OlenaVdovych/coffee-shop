import { Component } from 'react';

import logo from './img/Logo.svg';
import beans from '../navbar/img/coffee-beans.png';
import line1 from './img/Line.png';
import bean from './img/Group.png';

import './footer.css';

class Footer extends Component{
    render () {
        return(
            <div className="footer">
                <div className="ft">
                <a href="#beans" className=" ft ft-beans"><img src={beans} alt=""/></a>
                <a href="#logo" className="ft ft-logo"><img src={logo} alt=""/></a>
                <a href="#our-coffee" className=" ft ft-our-coffee">Our coffee</a>
                <a href="#pleasure" className="ft ft-pleasure">For your pleasure</a>
                </div>
                <div className="footer-logo">
                    <img src={line1} alt="" className="line5" />
                    <img src={bean} alt="" className="bean"/>
                    <img src={line1} alt="" className="line6"/>
                </div>
            </div>
        );
    }
}

export default Footer;