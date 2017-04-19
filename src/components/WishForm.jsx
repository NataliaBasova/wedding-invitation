import React from 'react';

const WishForm = React.createClass({
    getInitialState() {
        return {
            author: '',
            wishes: '',
            //isValid: false
        }
    },

    handleChange() {
        this.setState(
            {
                author: this.refs.name.value,
                wishes: this.refs.wishes.value,
                //isValid: true
            });
    },

    handleSubmit(e) {
        e.preventDefault();
        let author = this.state.author.trim();
        let wishes = this.state.wishes.trim();
        if (!wishes || !author) {
            return;
        }
        this.props.onWishSubmit({author, wishes});
        this.setState({author: '', wishes: ''});
    },

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       placeholder="Имя"
                       value={this.state.author}
                       onChange={this.handleChange}
                       ref="name"
                />
                <textarea
                    value={this.state.wishes}
                    onChange={this.handleChange}
                    ref="wishes" />
                <button disabled={!this.state.author || !this.state.wishes}>Отправить</button>
            </form>

        );
    }
});

export default WishForm;