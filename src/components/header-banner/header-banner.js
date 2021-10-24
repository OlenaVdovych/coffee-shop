import { Component } from 'react';

import Navbar from '../navbar/navbar';
import bg from './img/Main bg.jpg';
import line from './img/Line.png';
import beans from './img/coffee-beans (1).png';


import './header-banner.css';

class HeaderBanner extends Component {
    render() {
        return(
            <div className="main">
                <img src={bg} alt="" className="main-bg"/>
                <Navbar/>
                <h1>Everything You Love About Coffee</h1>
                <span className="beans-logo">
                    <img src={line} alt="" className="line1" />
                    <img src={beans} alt="" className="beans"/>
                    <img src={line} alt="" className="line2"/>
                </span>
                <span>
                <h2 className="make">We makes every day full of energy and taste</h2>
                <h2 className="want">Want to try our beans?</h2>
                <button className="moreBtn">More</button>
                </span>
                
            </div>
        )
    }
}

export default HeaderBanner;
