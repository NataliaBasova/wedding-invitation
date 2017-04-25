import React, {Component, PropTypes} from 'react'

export default class IconDinner extends Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.9 33.4" width={this.props.width} height={this.props.height}>
                <title>Dinner</title>
                <g id="dish">
                    <path fill ={this.props.fill} d="M56.3,29.5C55,17.2,45.3,8.1,32.8,6.7a4.07,4.07,0,0,0,.8-2.4,4,4,0,1,0-8,0,4.07,4.07,0,0,0,.8,2.4C13.7,8.1,4,17.2,2.7,29.5l-.1,1H56.4ZM29.5,2.1a2.2,2.2,0,1,1-2.2,2.2A2.22,2.22,0,0,1,29.5,2.1ZM4.6,28.7C6.4,16.9,16.7,8.4,29.5,8.4s23.1,8.5,24.9,20.3Z" transform="translate(-0.1 -0.3)"/>
                    <rect fill ={this.props.fill} y="31.6" width="57.9" height="1.8"/>
                    <path fill ={this.props.fill} d="M20.8,12.7a15.58,15.58,0,0,0-8.3,6.4.75.75,0,0,0,.2,1,.6.6,0,0,0,.4.1.62.62,0,0,0,.6-.4A14,14,0,0,1,21.2,14a.72.72,0,0,0,.5-.9A.75.75,0,0,0,20.8,12.7Z" transform="translate(-0.1 -0.3)"/>
                    <path fill ={this.props.fill} d="M12,21.9a.88.88,0,0,0-1,.5c-.1.2-.1.3-.2.5a.72.72,0,0,0,.5.9h.2a.75.75,0,0,0,.7-.5c0-.1.1-.3.1-.4C12.6,22.4,12.4,22,12,21.9Z" transform="translate(-0.1 -0.3)"/>
                </g>
            </svg>
        );
    }
}

IconDinner.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    fill: PropTypes.string
};
IconDinner.defaultProps = {
    width: '8em',
    height: '6em',
    fill: '#ccd4cc'

};