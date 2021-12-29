import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: props.restaurantId,
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state)
    this.setState({
      ...this.state,
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
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


export default (ReviewInput);
