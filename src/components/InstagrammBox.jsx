import React from 'react';
import InstagrammList from './InstagrammList.jsx'

//noinspection JSAnnotator
const InstagrammBox = React.createClass({
    getInitialState(){
        return {
            result: []
        }
    },

    componentDidMount() {
        $.ajax({
            url: 'https://api.instagram.com/v1/tags/' + this.props.hashTag + '/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: {access_token: this.props.token, count: 20},
            success: result => this.setState({result: result.data}),
            error: result => console.log(result)
        });
    },

    render() {
        return (
            <section className="insta-section">
                <InstagrammList result={this.state.result}/>
            </section>
        );
    }
});

export default InstagrammBox;