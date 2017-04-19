import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Couple from './Couple.jsx';
import WishBox from './WishBox.jsx';
import Clock from './Clock.jsx';
import Footer from './Footer.jsx';

const WeddingApp = React.createClass({

    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Clock deadline="May 12, 2017"/>
                <Couple/>
                <WishBox url="/api/comments" pollInterval={2000}/>
                <Footer/>
            </div>
        );
    }
});

//module.exports = WeddingApp;
export default WeddingApp;