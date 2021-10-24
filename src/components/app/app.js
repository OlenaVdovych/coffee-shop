import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from '../navbar/navbar';
import HeaderBanner from '../header-banner/header-banner';
import About from '../about/about';
import ProductCards from '../product-cards/product-card';
import Footer from '../footer/footer';
import OurCoffee from '../our-coffee/our-coffee';
import OurCoffeeAbout from '../our-coffee-about/our-coffee-about';
import ForYourPleasure from '../for-your-pleasure/for-your-pleasure';


import './app.css';

function App() {
    return (
        <Router>
            <div className="app">
            <Navbar/>
                    <main>
                        <Switch>
                            <Route exact path="/our-coffee">
                                <OurCoffee/>
                            </Route>
                            <Route exact path="/our-coffee-about">
                                <OurCoffeeAbout/>
                            </Route>
                            <Route exact path="/for-your-pleasure">
                                <ForYourPleasure/>
                            </Route>
                            <Route exact path="/">
                                <HeaderBanner/>
                                <About/>
                                <ProductCards/>
                            </Route>
                        </Switch>
                    </main>
                    <Footer/>
            </div>
        </Router>
    );
}

export default App;