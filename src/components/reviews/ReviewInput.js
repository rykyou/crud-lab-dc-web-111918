import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    reviewText: ''
  }

  handleOnChange = event => {
    this.setState({
      reviewText: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state.reviewText, this.props.restaurant);
    this.setState({
      reviewText: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            type="text"
            value={this.state.reviewText}
            onChange={this.handleOnChange}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
