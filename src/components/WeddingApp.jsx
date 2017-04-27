import React, { Component } from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Couple from './Couple.jsx';
import Details from './Details.jsx'
import WishBox from './WishBox.jsx';
import InstagramBox from './InstagramBox.jsx';
import GMap from './GMap.jsx'
import Clock from './Clock.jsx';
import Footer from './Footer.jsx';

export default class WeddingApp extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Clock deadline="May 12, 2017"/>
                <Couple/>
                <Details/>
                <GMap initialCenter={{lng: 34.654871, lat: 49.598255}} />
                <WishBox url="/api/comments" pollInterval={2000}/>
                <InstagramBox token="312720290.9341300.7fe62e760cda411fab151458265dc9a0"
                               clientId="9341300a9fd64b6484a566dce8085e0b"
                               hashTag="kiev"/>

                <Footer/>
            </div>
        );
    }
}