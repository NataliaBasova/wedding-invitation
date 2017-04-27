import React from 'react'
import IconHomeTitle from './icons/HomeTitle.jsx'

const Home = React.createClass({
    render() {
        return (
            <section id="home-section" className="home-section" name="home-section">
                <div className="home-title">
                    <IconHomeTitle/>
                </div>
            </section>
        )
    }
});

export default Home;