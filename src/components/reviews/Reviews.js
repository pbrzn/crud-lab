import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './Review';

class Reviews extends Component {
  renderReviews = () => this.props.reviews.filter(review => this.props.restaurantId === review.restaurantId).map(review => {
    return (
      <li>
        <Review
          key={review.id}
          review={review}
          delete={this.props.delete}
        />
      </li>
    )
  })

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

// const mapStateToProps = state => ({ reviews: state.reviews })

const mapDispatchToProps = dispatch => {
  return { delete: id => dispatch({ type: 'DELETE_REVIEW', id: id }) }
}

export default connect(null, mapDispatchToProps)(Reviews);
