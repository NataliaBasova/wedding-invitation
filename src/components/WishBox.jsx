import React from 'react';
import WishList from './WishList.jsx';
import WishForm from './WishForm.jsx';

const WishBox = React.createClass({

    loadWishesFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => this.setState({data}),
            error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
        });
    },

    handleWishSubmit(comment) {

        let comments = this.state.data;
        comment.id = Date.now();
        let newComments = comments.concat([comment]);
        this.setState({data: newComments});

        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: data => {this.setState({data})},
            error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
        });
    },

    getInitialState() {
        return {
            data: []
        }
    },
    componentDidMount() {
        this.loadWishesFromServer();
        setInterval(this.loadWishesFromServer, this.props.pollInterval);
    },

    render() {
        return (
            <section className="wishes-section">
                <h2>Книга пожеланий</h2>
                <WishList data={this.state.data}/>
                <WishForm onWishSubmit={this.handleWishSubmit}/>
            </section>
        );
    }
});

export default WishBox;