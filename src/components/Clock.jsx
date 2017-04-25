import React from 'react';
import IconHeart from './icons/Heart.jsx'

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
                <div className="clock-container container">
                    <h2>До нашей свадьбы осталось</h2>
                    <div className="flex-item-7 days"><span>{this.state.days}</span> <span className="subtitle">дней</span> </div>
                    <div className="flex-item-7"><IconHeart/></div>
                    <div className="flex-item-7 hours"><span>{this.state.hours}</span> <span className="subtitle">часов</span></div>
                    <div className="flex-item-7"><IconHeart/></div>
                    <div className="flex-item-7 minutes"><span>{this.state.minutes}</span> <span className="subtitle">минут</span></div>
                    <div className="flex-item-7"><IconHeart/></div>
                    <div className="flex-item-7 seconds"><span>{this.state.seconds}</span> <span className="subtitle">секунд</span></div>
                </div>
            </section>
        );
    }
});

export default Clock;