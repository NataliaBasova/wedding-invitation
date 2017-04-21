import React from 'react';
import Lightbox from 'react-images';
import InstagramImg from './InstagrammImg.jsx'

const InstagrammList = React.createClass({

    getInitialState () {
        return {
            lightboxIsOpen: false,
            currentImage: 0,
            urls: []
        }
    },

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
            urls: this.state.urls
        });
        console.log(this.state.urls, this.state.currentImage);
    },
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    },
    gotoPrevious () {
        this.setState({currentImage: this.state.currentImage - 1});
    },
    gotoNext () {
        this.setState({currentImage: this.state.currentImage + 1});
    },

    renderImage () {
        const instaNodes = this.props.result.map((result, i) => {

            return (
                <InstagramImg data={result.images} key={i} imgClick={(e) => this.openLightbox(i, e)}/>
            );
        });


        return (
            <div>{instaNodes}</div>
        )
    },

    getImage () {
        let urlsImg = this.state.urls;


        this.props.result.map((result) => {
            urlsImg.push({ src: result.images.standard_resolution.url });

        });


        this.setState({urls: urlsImg});
    },

    componentWillMount() {
        this.getImage();
        setTimeout(this.getImage, 3000);
    },



    render() {
        return(
           <div className="gallery">
               {this.renderImage()}
               <Lightbox
                   images={this.state.urls}
                   isOpen={this.state.lightboxIsOpen}
                   onClickPrev={this.gotoPrevious}
                   onClickNext={this.gotoNext}
                   onClose={this.closeLightbox}
               />
           </div>
        );
    }
});

export default InstagrammList;

{/*<InstagrammImg data={result.images} key={result.id}/>*/}