import React, {Component, PropTypes} from 'react'

export default class IconHeart extends Component {

    render() {
        return (
            <svg className="icon-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.26 28.36" width={this.props.width}  height={this.props.height}>
                <title>heart</title>
                <path fill ={this.props.fill} d="M19.77,8.51C19.59,8.18,17.35,4,13,3.66A8.22,8.22,0,0,0,5,8.23C2.12,15,12.75,25.36,14,26.59L19.77,32h0a45.7,45.7,0,0,0,6.65-6.14c3.66-4.13,10.16-11.44,7.92-17.1a8,8,0,0,0-6.83-4.88A8.58,8.58,0,0,0,19.77,8.51Z" transform="translate(-4.53 -3.64)"/>
            </svg>
        );
    }
}

IconHeart.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string
};
IconHeart.defaultProps = {
    width: '1.5em',
    height: '1.5em',
    fill: '#fdd3cd'

};