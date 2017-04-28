import React, { Component } from 'react';
import data from './api/gmap.json';

export default class GMap extends Component {

    constructor (props) {
        super(props);

        this.state = {
            url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBciyk63lqj1HQShs9CV6ER3fwaMJGRbM0&callback",
            image: './img/map-marker.png'
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

    toggleBounce(marker) {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
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
                draggable: true,
                animation: google.maps.Animation.DROP,
                icon: this.state.image,
                map: this.map
            });

            this.marker.addListener('click', (evt) => {
                if (this.marker.getAnimation() !== null) {
                    this.marker.setAnimation(null);
                } else {
                    this.marker.setAnimation(google.maps.Animation.BOUNCE);
                }
            })
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

