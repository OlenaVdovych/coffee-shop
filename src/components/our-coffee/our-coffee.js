import { Component } from "react";

import Navbar from '../navbar/navbar';
import Footer from "../footer/footer";
import banner from './img/Mask Group.jpg';
import face from './img/face.png';
import lineCoffee from './img/LineCoffee.png';

import './our-coffee.css';
import group2 from './img/Group.png';
import line1 from './img/Line.png';
import cardFile from './img/card.png'


class OurCoffee extends Component {

    render () {
        return (
            <div className="body-coffee">
                <img src={banner} alt="" className="banner"/>
                <Navbar/>
                <h1 className="coffee">Our Coffee</h1>
                <div className="info">
                    <img src={face} alt="" className="face"/>
                    <h2>About our beans</h2>
                    <div className="logo-info">
                        <img src={line1} alt="" className="line7"/>
                        <img src={group2} alt="" className="group2"/>
                        <img src={line1} alt="" className="line8"/>
                    </div>
                    <p className="p-info">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
                <img src={lineCoffee} alt="" className="line-coffee"/>
                <div className="look">
                    <h4 className="look-h1">Looking for</h4>
                    <input type="search" className="input" placeholder="start typing here..."/>
                </div>
                <div className="filter">
                    <h4 className="filter-h1">Or filter</h4>
                    <button className="btn-filter btn-1">Brazil</button>
                    <button className="btn-filter btn-2">Kenya</button>
                    <button className="btn-filter btn-3">Columbia</button>
                </div>
                
                <div className="card-if1">
                    <img src={cardFile} alt="" className="card-if-img"/>
                    <h4 className="card-h4">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country">Brazil</h4>
                    <h5 className="card-h5">6.99$</h5>
                </div>
                <div className="card-if2">
                    <img src={cardFile} alt=""  className="card-if-img"/>
                    <h4 className="card-h4">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country">Kenya</h4>
                    <h5 className="card-h5">6.99$</h5>
                </div>
                <div className="card-if3">
                <img src={cardFile} alt="" className="card-if-img"/>
                    <h4 className="card-h4">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country">Columbia</h4>
                    <h5 className="card-h5">6.99$</h5>
                </div>
                <div className="card-if4">
                    <img src={cardFile} alt="" className="card-if-img"/>
                    <h4 className="card-h4">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country">Brazil</h4>
                    <h5 className="card-h5">6.99$</h5>
                </div>
                <div className="card-if5">
                    <img src={cardFile} alt=""  className="card-if-img"/>
                    <h4 className="card-h4">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country">Brazil</h4>
                    <h5 className="card-h5">6.99$</h5>
                </div>
                <div className="card-if6">
                    <img src={cardFile} alt="" className="card-if-img"/>
                    <h4 className="card-h4">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country">Brazil</h4>
                    <h5 className="card-h5">6.99$</h5>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default OurCoffee;