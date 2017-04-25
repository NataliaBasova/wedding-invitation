import React from 'react';

const Wish = React.createClass({
    render: function() {
        return (
            <div className="wish-item">
                <div className="author">
                    {this.props.author}
                </div>
                <div className="text">{this.props.children}</div>
            </div>
        );
    }
});

export default Wish;