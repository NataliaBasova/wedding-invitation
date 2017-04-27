import React, { Component } from 'react';
import data from './api/gmap.json';

export default class GMap extends Component {

    constructor (props) {
        super(props);

        this.state = {
            url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBciyk63lqj1HQShs9CV6ER3fwaMJGRbM0&callback",
        }

    }

    loadScript (url, callback) {
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onreadystatechange = callback;
        script.onload = callback;
        head.appendChild(script);
    }

    componentDidMount(){
        this.loadScript(this.state.url, ()=>{
            this.map = new google.maps.Map(this.refs.map, {
                center: this.props.initialCenter,
                zoom: 11,
                styles: data
            });

            this.marker = new google.maps.Marker({
                position: this.props.initialCenter,
                map: this.map
            });
        })

    }

    render() {
        return (
            <div id="gmap-section" className="gmap-section" name="gmap-section">
                <div className="container container-flex">
                    <div className="flex-item">
                        <h4>Адрес:</h4>
                         <p className="adress">Полтавская обл, Полтавский р-н, <br/>38701 с.Сосновка, <br/>ул.Сосновая, 1</p>
                    </div>
                    <div className="gmap-canvas flex-item" ref="map">I should be a map</div>
                </div>
            </div>
        );
    }
}

