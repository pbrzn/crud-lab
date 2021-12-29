import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map(restaurant => {
    return (
      <li id={restaurant.id}>
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          reviews={this.props.reviews}
          addReview={this.props.addReview}
          delete={this.props.delete}
        />
      </li>
    )
  })

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return { delete: id => dispatch({ type: 'DELETE_RESTAURANT', id: id }) }
}

export default connect(null, mapDispatchToProps)(Restaurants);
