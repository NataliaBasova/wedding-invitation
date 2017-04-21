import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';
import InstagramImg from './InstagrammImg.jsx'

export default class InstagrammList extends Component {

    constructor (props) {
        super(props);

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            urls: [],
        };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });

    }

    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({currentImage: this.state.currentImage - 1});
    }
    gotoNext () {
        this.setState({currentImage: this.state.currentImage + 1});
    }

    renderImage () {
        const instaNodes = this.props.result.map((result, i) => {

            return (
                <a
                    className="insta-img"
                    key={i}
                    href={result.images.standard_resolution.url}
                    onClick={(e) => this.openLightbox(i, e)}
                >
                    <img src={result.images.low_resolution.url} />
                </a>
            );
        });


        return (
            <div>{instaNodes}</div>
        )
    }

    getImage () {
        let urlsImg = this.state.urls;

        this.props.result.map((result) => {
            urlsImg.push({ src: result.images.standard_resolution.url });

        });


        this.setState({urls: urlsImg});
    }

    componentWillMount() {
        this.getImage();
        setTimeout(this.getImage, 3000);
    }



    render() {
        return(
           <div className="gallery">
               {this.renderImage()}
               <Lightbox
                   currentImage={this.state.currentImage}
                   images={this.state.urls}
                   isOpen={this.state.lightboxIsOpen}
                   onClickPrev={this.gotoPrevious}
                   onClickNext={this.gotoNext}
                   onClose={this.closeLightbox}
               />
           </div>
        );
    }
}
