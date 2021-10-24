import { Component } from "react";

import Navbar from '../navbar/navbar';
import Footer from "../footer/footer";
import bannerAboutCoffee from './img/Mask Group.png';
import cardAbout from './img/Card-about.jpg';
import group2 from './img/Group.png';
import line1 from './img/Line.png';

import './our-coffee-about.css';

class OurCoffeeAbout extends Component {
    render () {
        return (
            <div className="about-coffee">
                <img src={bannerAboutCoffee} alt="" className="banner-about"/>
                <Navbar/>
                <h1 className="h-about">Our Coffee</h1>
                <div className="card-coffee">
                    <img src={cardAbout} alt="" className="card-about"/>
                    <h2 className="about-it">About it</h2>
                    <div className="coffee-info">
                        <img src={line1} alt="" className="line9"/>
                        <img src={group2} alt="" className="group2"/>
                        <img src={line1} alt="" className="line10"/>
                    </div>
                    <h4 className="h-about">Country: Brasil</h4>
                    <p className="p-about">
                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3 className="price">
                    Price:  16.99$
                    </h3>
                </div>
                <Footer/>
                </div>
        )
    }
}

export default OurCoffeeAbout;