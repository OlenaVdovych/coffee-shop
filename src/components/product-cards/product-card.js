import { Component } from 'react';

import './product-card.css';
import bg from './img/paper-1074131_1920.png';
import card1 from './img/1.png';
import card2 from './img/2.png';
import card3 from './img/3.png';

class ProductCards extends Component {
    render () {
        return(
            <div className="product">
                <img src={bg} alt="" className="bg"/>
                <h3 className="best">Our best</h3>
                <div className="container">
                <div className="card1">
                    <img src={card1} alt="" className="card1"/>
                    <h4 className="card1">Solimo Coffee Beans 2 kg</h4>
                    <h5 className="card1">10.73$</h5>
                </div>
                <div className="card2">
                    <img src={card2} alt=""  className="card2"/>
                    <h4 className="card2">Presto Coffee Beans 1 kg</h4>
                    <h5 className="card2">15.99$</h5>
                </div>
                <div className="card3">
                    <img src={card3} alt="" className="card3"/>
                    <h4 className="card3">AROMISTICO Coffee 1 kg</h4>
                    <h5 className="card3">6.99$</h5>
                </div>
                </div>
            </div>
        )
    }
}

export default ProductCards;