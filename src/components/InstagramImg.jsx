import React from 'react';

const InstagramImg = React.createClass({

     render () {
        return (
            <a
                className="insta-img"
                href={this.props.data.standard_resolution.url}
                onClick={this.props.imgClick}
            >
                <img src={this.props.data.low_resolution.url} />
            </a>
        );
    }
});
export default InstagramImg;
