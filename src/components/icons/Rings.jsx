import React, {Component, PropTypes} from 'react'

export default class IconRings extends Component {

    render() {
        return (
            <svg className="icon-rings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.53 67.15" width={this.props.width} height={this.props.height}>
                <path fill={this.props.fill} d="M66.37,16.12,68.46,23a19.55,19.55,0,1,0,5.35,2.57l6.71-2.69a25.89,25.89,0,1,1-14.15-6.79Z" transform="translate(-1.84 -1.55)"/>
                <polygon fill={this.props.fill} points="62.1 2.62 69.56 0 69.43 6.15 62.1 2.62"/><polygon fill={this.props.fill} points="78.99 12.82 71.97 20.2 69.14 23.19 69.7 19.11 71.08 9.02 78.99 12.82"/>
                <polygon fill={this.props.fill} points="71.42 0.11 77.51 3.04 71.3 6.11 71.42 0.11"/><polygon fill={this.props.fill} points="61.22 4.28 69.32 8.17 67.91 18.43 67.16 23.91 65.28 17.69 61.22 4.28"/>
                <polygon fill={this.props.fill} points="79.64 4.07 85.68 6.97 81.12 10.82 79.64 4.07"/><polygon fill={this.props.fill} points="86.92 8.35 89.53 15.82 82.24 12.31 86.92 8.35"/>
                <polygon fill={this.props.fill} points="72.45 7.61 77.93 4.92 79.22 10.86 72.45 7.61"/><polygon fill={this.props.fill} points="69.89 25.1 73.61 21.19 80.75 13.66 88.79 17.53 75.78 22.73 69.89 25.1"/>
                <path fill={this.props.fill} d="M1.84,41.75a27,27,0,1,1,27,27A27,27,0,0,1,1.84,41.75Zm6.12,0A20.84,20.84,0,1,0,28.79,20.9,20.87,20.87,0,0,0,8,41.75Z" transform="translate(-1.84 -1.55)"/>
            </svg>
        );
    }
}

IconRings.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string
};
IconRings.defaultProps = {
    width: '7em',
    height: '6em',
    fill: '#ccd4cc'

};