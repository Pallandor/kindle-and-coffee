import React, { Component } from 'react';
import * as helpers from '../../helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  handleClick() {
    this.setState({
      loading: true,
    });
    helpers.redirectTo('http://localhost:3000/getcoffee');
  }

  renderButton() {
    return this.state.loading ?
      <div>Loading... (the coffee will be worth it, promise!)</div> :
      <button onClick={this.handleClick}>Click me to order your 1kg of Swiss chocolate coffee!</button>;
  }

  render() {
    return (
      <div>
        <h3>Welcome to Kindle & Coffee</h3>
        {this.renderButton()}
      </div>
    );
  }

}

export default App;
