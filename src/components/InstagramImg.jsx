import React from 'react';

const InstagramImg = React.createClass({

     render () {
        return (
            <div className="flex-item">
                <a
                    className="instagram-img"
                    href={this.props.data.standard_resolution.url}
                    onClick={this.props.imgClick}
                >
                    <img src={this.props.data.low_resolution.url} />
                </a>
            </div>

        );
    }
});
export default InstagramImg;
