import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  allReviews() {
    return this.props.reviews.map(review => <Review 
      key={review.id}
      review={review}
      deleteReview={this.props.deleteReview}
    />)
  }

  render() {
    return (
      <ul>
        {this.props.reviews ? this.allReviews() : null}
      </ul>
    );
  }
};

export default Reviews;