import React, { Component } from 'react';

// import Restaurants from './Restaurants';

class RestaurantInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text: text })
//   }
// }
//
// export default connect(null, mapDispatchToProps)(RestaurantInput);
export default RestaurantInput;
