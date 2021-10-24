import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import logo from './img/Logo.svg';
import beans from './img/coffee-beans.png';
import './navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <a href="#beans" className="beans"><img src={beans} alt=""/></a>
                <Link to="/" className="logo"><img src={logo} alt=""/></Link>
                <Link to="../coffee-page/" className="our-coffee">Our coffee</Link>
                <Link to=".../for-your-pleasure" className="pleasure">For your pleasure</Link>
            </div>
            );
    }
}
export default Navbar;
