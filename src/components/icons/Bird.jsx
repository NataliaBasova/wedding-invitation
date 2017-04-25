import React, {Component, PropTypes} from 'react'

export default class IconBird extends Component {

    render() {
        return (
            <svg className="icon-bird" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.71 50.97" width={this.props.width} height={this.props.height}>
                <title>birds</title>
                <path fill ={this.props.fill} d="M3.13,11.92l4.6-1.74a13.11,13.11,0,0,1,8-7.77A12.71,12.71,0,0,1,28.53,5.79c1.4,1.76,2.5,3.36,3.34,4.64,1.22,1.88,2.06,3.39,2.63,4.44.8,1.46,1.43,2.71,1.87,3.61a18.23,18.23,0,0,0,11.08,5.85,6.68,6.68,0,0,0,4.21-1.58c.16-.16.4-.41.45-.38a35.67,35.67,0,0,1-3,4.57l3.84,1a18.89,18.89,0,0,1-3.54,4.62c-5,4.79-11.35,5.31-14.63,5.59-4.4.36-13.08,1.1-20.12-5.07-6.38-5.59-7.47-16-7.38-16.46Z" transform="translate(-3.13 -1.86)"/>
                <path fill ={this.props.fill} d="M39.34,45.73c.23-.2,3.89-3.48,4.36-7.32a2.82,2.82,0,0,1,1.23-2.18,2.49,2.49,0,0,1,2.88.92c.74,1.13.28,3.14-1.49,4.36l-3.36,2.74-1.62,1.49Z" transform="translate(-3.13 -1.86)"/>
                <path fill ={this.props.fill} d="M26.23,45.73c.19-.17,3.26-2.94,3.64-6.19a2.4,2.4,0,0,1,1-1.85,2.07,2.07,0,0,1,2.41.78c.62,1,.24,2.66-1.25,3.68l-2.81,2.31-1.35,1.26Z" transform="translate(-3.13 -1.86)"/>
                <path fill ={this.props.fill} d="M52.64,46.19a2,2,0,0,0,.6-2.09,1.57,1.57,0,0,0-.81-.9c-.74-.3-1.51.31-2,.69a8.08,8.08,0,0,0-1.86,2.27h0Z" transform="translate(-3.13 -1.86)"/>
                <path fill ={this.props.fill} d="M52.64,46.19a2,2,0,0,1,.58,2.1,1.57,1.57,0,0,1-.82.89c-.75.28-1.51-.33-2-.72a8.11,8.11,0,0,1-1.83-2.3h0Z" transform="translate(-3.13 -1.86)"/>
                <line stroke={this.props.fill} strokeMiterlimit="10"  x1="8.46" y1="44.33" x2="45.45" y2="44.3"/>
                <path stroke={this.props.fill} fill={this.props.fill} strokeWidth="1.65px" d="M19.25,46.41c-.08.14,2.61.82,4.24,3.24.56.83.84,1.63,1.8,2.07.56.26,1.56.49,2.07,0a1.3,1.3,0,0,0,.28-1c0-.27-.18-.89-1.34-1.64a11.11,11.11,0,0,0-3.51-1.22C20.61,47.18,19.31,46.3,19.25,46.41Z" transform="translate(-3.13 -1.86)"/>
            </svg>
        );
    }
}

IconBird.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string
};
IconBird.defaultProps = {
    width: '7em',
    height: '6em',
    fill: '#ccd4cc'

};