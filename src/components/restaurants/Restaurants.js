import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  renderRestaurants = () => this.props.restaurants.map(restaurant => {
    return (
      <li key={restaurant.id} id={restaurant.id}>
        <Restaurant
          restaurant={restaurant}
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

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

const mapDispatchToProps = dispatch => {
  return { delete: id => dispatch({ type: 'DELETE_RESTAURANT', id: id }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
