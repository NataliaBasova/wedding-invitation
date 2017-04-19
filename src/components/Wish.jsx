import React from 'react';

const Wish = React.createClass({
    render: function() {
        return (
            <div className="wish">
                <h5 className="wishAuthor">
                    {this.props.author}
                </h5>
                {this.props.children}
            </div>
        );
    }
});

export default Wish;