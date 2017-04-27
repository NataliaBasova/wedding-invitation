import React, { Component } from 'react';
import Scroll from './script/scroll.js'
import Menu from './script/menu.js'
import Logo from './Logo.jsx'

export default class  Navigation extends Component {
    render() {
        return (
            <nav className="nav">
              <ul>
                  <li className="logo"><Logo/></li>
                  <li className="item"><a href="#home-section">Наша свадьба</a></li>
                  <li className="item"><a href="#detail-section">Программа</a></li>
                  <li className="item"><a href="#gmap-section">Как добраться</a></li>
                  <li className="item"><a href="#wishes-section">Книга пожеланий</a></li>
                  <li className="item"><a href="#instagram-section">Фото</a></li>
              </ul>
            </nav>
        )
    }
}