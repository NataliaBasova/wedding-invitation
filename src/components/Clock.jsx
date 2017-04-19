import React from 'react';
import IconLeaf from './icons/Leaf.jsx'

const Clock = React.createClass({

    getInitialState() {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    },

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    },

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline, 1000));
    },

    getTimeUntil(deadline) {
        const weddingTime = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((weddingTime/1000) % 60);
        const minutes = Math.floor(weddingTime/(1000*60) % 60);
        const hours = Math.floor(weddingTime/(1000*60*60) % 24);
        const days = Math.floor(weddingTime/(1000*60*60*24));

        this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
    },

    render() {

        return (
            <section className="clock-section">
                <div className="clock-container">
                    <h2>До нашей свадьбы осталось</h2>
                    <div className="days"><span>{this.state.days}</span> <span className="subtitle">days</span> </div>
                    <div className="hours"><span>{this.state.hours}</span> <span className="subtitle">hours</span></div>
                    <div className="minutes"><span>{this.state.minutes}</span> <span className="subtitle">minutes</span></div>
                    <div className="seconds"><span>{this.state.seconds}</span> <span className="subtitle">seconds</span></div>
                    {/*<IconLeaf width="142" height="112" leafFill="#fff"/>*/}
                </div>
            </section>
        );
    }
});

export default Clock;