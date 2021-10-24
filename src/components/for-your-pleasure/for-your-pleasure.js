import { Component } from "react";

import Navbar from '../navbar/navbar';
import Footer from "../footer/footer";
import bannerP from './img/Mask Group.png';
import cup from './img/Cup.png';

import './for-your-pleasure.css';
import group3 from './img/Group.png';
import line2 from './img/Line.png';
import linePleasure from './img/Line-pleasure.png';
import cardFilePleasure from './img/card.png';

class ForYourPleasure extends Component {
    render () {
        return (
            <div className="body-pleasure">
                <img src={bannerP} alt="" className="banner-p"/>
                <Navbar/>
                <h1 className="pleasure">For Your Pleasure</h1>
                <div className="info-pleasure">
                    <img src={cup} alt="" className="cup"/>
                    <h2>About our goods</h2>
                    <div className="goods-info">
                        <img src={line2} alt="" className="line9"/>
                        <img src={group3} alt="" className="group3"/>
                        <img src={line2} alt="" className="line10"/>
                    </div>
                    <p className="p-goods">
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
                <img src={linePleasure} alt="" className="line-pleasure"/>
                <div className="card-pl1">
                    <img src={cardFilePleasure} alt="" className="card-pl-img"/>
                    <h4 className="card-h4-pl">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country-pl">Brazil</h4>
                    <h5 className="card-h5-pl">6.99$</h5>
                </div>
                <div className="card-pl2">
                    <img src={cardFilePleasure} alt=""  className="card-pl-img"/>
                    <h4 className="card-h4-pl">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country-pl">Kenya</h4>
                    <h5 className="card-h5-pl">6.99$</h5>
                </div>
                <div className="card-pl3">
                <img src={cardFilePleasure} alt="" className="card-pl-img"/>
                    <h4 className="card-h4-pl">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country-pl">Columbia</h4>
                    <h5 className="card-h5-pl">6.99$</h5>
                </div>
                <div className="card-pl4">
                    <img src={cardFilePleasure} alt="" className="card-pl-img"/>
                    <h4 className="card-h4-pl">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country-pl">Brazil</h4>
                    <h5 className="card-h5-pl">6.99$</h5>
                </div>
                <div className="card-pl5">
                    <img src={cardFilePleasure} alt=""  className="card-pl-img"/>
                    <h4 className="card-h4-pl">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country-pl">Brazil</h4>
                    <h5 className="card-h5-pl">6.99$</h5>
                </div>
                <div className="card-pl6">
                    <img src={cardFilePleasure} alt="" className="card-pl-img"/>
                    <h4 className="card-h4-pl">AROMISTICO Coffee 1 kg</h4>
                    <h4 className="country-pl">Brazil</h4>
                    <h5 className="card-h5-pl">6.99$</h5>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ForYourPleasure;