import React from 'react';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';

const Header = React.createClass({
    render() {
        return (
            <header className="header">
                <div className="header-container">
                    <Logo />
                    <Navigation/>
                </div>
            </header>
        );
    }
});

export default Header;