import React from 'react';
import ReactDOM from 'react-dom';
import IconHomeTitle from './icons/HomeTitle.jsx'



const Home = React.createClass({

    render() {
        return (
            <section id="home-section" className="home-section" name="home-section">
                <figure className="video-container video-container-overlay">
                    <video autoPlay preload="metadata" muted loop playsInline poster="./img/home/bg-5.jpg"  id="myVideo">
                        <source src="./img/video/days.mp4" type="video/mp4" />
                    </video>
                </figure>
                <div className="home-title">
                    <IconHomeTitle/>
                </div>
            </section>
        )
    }
});

export default Home;
