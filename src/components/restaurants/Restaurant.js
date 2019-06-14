import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  handleDeleteRestaurant = (id) => {
    this.props.deleteRestaurant(id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.name}
          <button onClick={() => this.handleDeleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
