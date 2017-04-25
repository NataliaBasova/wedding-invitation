import React, {Component, PropTypes} from 'react'

export default class IconPhoto extends Component {

    render() {
        return (
            <svg className="icon-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.51 77.26" width={this.props.width} height={this.props.height}>
                <title>Photo</title>
                <path fill="none" stroke={this.props.fill} strokeMiterlimit="10" strokeWidth="2px" d="M30.79,32.11c-3.9-2.73-10.77-.19-8.21,5.08,2.15,4.42,6.69,6.46,10.85,8.48" transform="translate(-1.5 -3.5)"/>
                <path fill="none" stroke={this.props.fill} strokeMiterlimit="10" strokeWidth="2px" d="M30.05,32.25c2.68-3.94,10-4,9.48,1.82-.43,4.9-3.95,8.42-7.11,11.79" transform="translate(-1.5 -3.5)"/>
                <rect fill="none" stroke={this.props.fill} strokeMiterlimit="10" strokeWidth="2px" x="4.99" y="11.31" width="52.04" height="61.22" rx="1" ry="1" transform="translate(-5.76 0.02) rotate(-6.08)"/>
                <rect fill="none" stroke={this.props.fill} x="10.94" y="17.24" strokeWidth="2px" width="39.75" height="39.75" rx="1" ry="1" transform="translate(-5.26 -0.03) rotate(-6.08)"/>
                <path fill="none" stroke={this.props.fill} strokeMiterlimit="10" strokeWidth="2px" d="M29.5,32.5" transform="translate(-1.5 -3.5)"/>
                <path fill="none" stroke={this.props.fill} strokeMiterlimit="10" strokeWidth="2.5px" d="M84.24,33.81c-2-4.34-9.15-5.68-9.65.17-.42,4.9,2.44,9,5,12.83" transform="translate(-1.5 -3.5)"/>
                <path fill="none" stroke={this.props.fill} strokeMiterlimit="10" strokeWidth="2.5px" d="M83.53,33.55c4.32-2,10.64,1.66,7.21,6.41-2.87,4-7.7,5.21-12.14,6.49" transform="translate(-1.5 -3.5)"/>
                <path fill="none" stroke={this.props.fill} strokeMiterlimit="10" strokeWidth="2px" d="M114.93,25,69.47,4.09a1,1,0,0,0-1.33.49L56.5,29.5c-.74,3.17,1.55,25,3,37,4.75,2.35,26,11.64,31.18,13.63l24.74-53.81A1,1,0,0,0,114.93,25Z" transform="translate(-1.5 -3.5)"/>
                <path fill="none" stroke={this.props.fill} strokeMiterlimit="10" strokeWidth="2px" d="M107.14,28,72.85,12.18a1,1,0,0,0-1.33.49L57.07,44.33q.2,1.24.37,2.53.15,1.07.27,2.11L90.54,64.07a1,1,0,0,0,1.33-.49l15.77-34.3Z" transform="translate(-1.5 -3.5)"/>
            </svg>
        );
    }
}

IconPhoto.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string
};
IconPhoto.defaultProps = {
    width: '9em',
    height: '7em',
    fill: '#ccd4cc'

};