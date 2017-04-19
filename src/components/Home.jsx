import React from 'react'
import IconHomeTitle from './icons/HomeTitle.jsx'

const Home = React.createClass({
    render() {
        return (
            <section className="home-section">
                <div className="home-title">
                    <IconHomeTitle/>
                </div>
            </section>
        )
    }
});

export default Home;