import React from 'react';
import IconHeart from './icons/Heart.jsx'

const Clock = React.createClass({

    getInitialState() {
        return {
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0

        }
    },

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    },

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline, 1000));
    },

    getTimeUntil(deadline) {
        const weddingTime = Date.parse(new Date()) - Date.parse(deadline);

        const months = Math.floor(weddingTime/(1000*60*60*24*30));
        const days = Math.floor(weddingTime/(1000*60*60*24) - months*30);
        const hours = Math.floor(weddingTime/(1000*60*60) % 24);
        const minutes = Math.floor(weddingTime/(1000*60) % 60);

        this.setState({days, hours, minutes, months});
    },

    render() {

        return (
            <section className="clock-section">
                <div className="clock-container container">
                    <h2>Счастливы вместе</h2>
                    <div className="flex-item-6 days"><span>{this.state.months}</span> <span className="subtitle">месяцев</span> </div>
                    <div className="flex-item-6"><IconHeart/></div>
                    <div className="flex-item-6 days"><span>{this.state.days}</span> <span className="subtitle">дней</span> </div>
                    <div className="flex-item-6"><IconHeart/></div>
                    <div className="flex-item-6 hours"><span>{this.state.hours}</span> <span className="subtitle">часов</span></div>
                </div>
            </section>
        );
    }
});

export default Clock;