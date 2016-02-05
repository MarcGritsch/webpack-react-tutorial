import React from 'react';
import ReactDOM from 'react-dom';

var LikeButton = React.createClass({
  getInitialState: function() {
    return {
      likes : 0
    };
  },
  handleClick: function() {
    this.setState({likes : this.state.likes +=1});
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.name}</button>
        <strong>Liked: {this.state.likes}</strong>
      </div>
    );
  }
});

var likeableThings = ['cat', 'puppy', 'goldfish'];


var LikeButtonList = React.createClass ({
  render: function() {
    var buttons = this.props.likeableThings.map(function(thing) {
        return <LikeButton key={thing} name={thing} />;
      }
    );
    return <ul> {buttons} </ul>;
  }
});

ReactDOM.render(<LikeButtonList likeableThings={likeableThings} /> , document.getElementById('button'));
