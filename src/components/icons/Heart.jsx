import React, {Component, PropTypes} from 'react'

export default class IconHeart extends Component {

    render() {
        return (
            <svg className="icon-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.97 40.26"  width={this.props.width}  height={this.props.height}>
                <title>hurt</title>
                <path fill={this.props.fill} d="M27.46,7.18c.23-.28,6-7,13.9-5.44a13.83,13.83,0,0,1,7.56,4.42s5.81,7.9-2,17.28S34.76,38.09,27.46,41.77" transform="translate(-4.03 -1.52)"/>
                <path fill={this.props.fill} d="M27.57,7.18c-.23-.28-6-7-13.9-5.44A13.83,13.83,0,0,0,6.11,6.16s-5.81,7.9,2,17.28S20.27,38.09,27.58,41.77" transform="translate(-4.03 -1.52)"/>
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
    width: '2em',
    height: '2em',
    fill: '#fdd3cd'

};