import React, { Component } from 'react';
import Navigation from './Navigation.jsx';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-container container">
                  <Navigation/>
                </div>
            </header>
        );
    }
}