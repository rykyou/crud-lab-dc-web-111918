import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
          addReview={this.props.addReview}
          restaurant={this.props.restaurant}
        />
        <Reviews 
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview}
        />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review, restaurant) => dispatch({
      type: "ADD_REVIEW",
      review, 
      restaurantId: restaurant.id
    }),
    deleteReview: reviewId => dispatch({
      type: "DELETE_REVIEW",
      reviewId
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
