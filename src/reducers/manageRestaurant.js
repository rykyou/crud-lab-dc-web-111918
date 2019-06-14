
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {
        id: cuidFn(),
        name: action.restaurantName
      }
      return { ...state, restaurants: [...state.restaurants, newRestaurant]} 
    
    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId)}
    
    case 'ADD_REVIEW':
      const newReview = {
        id: cuidFn(),
        restaurantId: action.restaurantId,
        text: action.review
      }
      // debugger
      return {...state, reviews: [...state.reviews, newReview]}

    case 'DELETE_REVIEW': 
      return {...state, reviews: state.reviews.filter(review => review.id !== action.reviewId)}

    default: 
      return state;
  }
}
