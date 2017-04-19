import React from 'react';
import Wish from './Wish.jsx';

const WishList = React.createClass({
    render() {
        const wishesNodes = this.props.data.map(wish => {
            return (
                <Wish author={wish.author} key={wish.id}>
                    {wish.wishes}
                </Wish>
            );
        });
        return (
            <div className="commentList">
                {wishesNodes}
            </div>
        );
    }
});

export default WishList;
