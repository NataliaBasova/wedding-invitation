import React from 'react';
import $ from 'jquery';
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
            <section id="wishes-section" className="wishes-section" name="wishes-section">
                <div className="container">
                    <div className="h2">Книга пожеланий</div>
                    <div className="subtitle-center">Оставь свое пожелание и мы поместим его в нашу Книгу пожеланий
                        и будем бережно хранить ее и перечитывать :)</div>
                    <div className="container-flex">
                        <div className="comment-list flex-item">
                            <WishList data={this.state.data}/>
                        </div>
                        <div className="wish-box flex-item">
                            <WishForm onWishSubmit={this.handleWishSubmit}/>
                        </div>
                    </div>
                </div>
                <div className="image-divider"></div>
            </section>
        );
    }
});

export default WishBox;