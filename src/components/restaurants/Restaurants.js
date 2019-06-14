import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  allRestaurants() {
    return this.props.restaurants.map(restaurant => <Restaurant 
      key={restaurant.id}
      restaurant={restaurant}
      deleteRestaurant={this.props.deleteRestaurant} 
    />)
  }

  render() {
    return(
      <div>
        <h3>All Restaurants:</h3>
        <ul>
          {this.allRestaurants()}
        </ul>
      </div>
    );
  }
};

export default Restaurants;