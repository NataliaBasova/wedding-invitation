import React from 'react'
import IconHomeTitle from './icons/HomeTitle.jsx'

const Home = React.createClass({
    render() {
        return (
            <section id="home-section" className="home-section" name="home-section">
                <figure className="video-container video-container-overlay">
                    <video autoPlay="true" muted loop id="myVideo">
                        <source src="./img/video/wedding-invitation.mp4" type="video/mp4" />
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