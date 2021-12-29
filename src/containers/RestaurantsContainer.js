import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} reviews={this.props.reviews} addReview={this.props.addReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  reviews: state.reviews
})

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text: text }),
    addReview: review => dispatch({ type: 'ADD_REVIEW', review: review })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
