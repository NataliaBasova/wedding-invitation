import React from 'react';
import Heart from './icons/Heart.jsx';

const Footer = React.createClass({
    render() {
        return (
            <footer className="footer">
                <div className="container-flex">
                    <p>Made with love <Heart width="1em" height="1em"/> by D&N</p>
                </div>
            </footer>
        );
    }
});

export default Footer;