import { combineReducers } from 'redux';
import cuid from 'cuid';

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

export default rootReducer;

function manageRestaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return state.concat({
        id: cuid(),
        text: action.text
      })

    case 'DELETE_RESTAURANT':
      return state.filter(restaurant => restaurant.id !== action.id)

    default:
      return state;
  }
}

function manageReviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return state.concat({
        id: cuid(),
        restaurantId: action.review.restaurantId,
        text: action.review.text
      })

    case 'DELETE_REVIEW':
      return state.filter(review => review.id !== action.id)

    default:
      return state;
  }
}
