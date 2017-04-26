import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';
import InstagramImg from './InstagramImg.jsx'

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
                <InstagramImg data={result.images} key={i} imgClick={(e) => this.openLightbox(i, e)}/>
            );
        });

        return (
            <div className="gallery container-flex flex-cols-4">{instaNodes}</div>
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
           <div className="container">
               <div className="h2">Фото</div>
               <div className="subtitle-center">Фотографии со свадьбы можно будет найти в Instagram по хештегу #dnWedding.
                   Профессиональные фотографии со свадьбы будут загружены чуть позже!</div>
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
