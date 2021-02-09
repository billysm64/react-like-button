import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.clickButton = this.clickButton.bind(this);
    this.state = {
      times: 0
    }
  }

  clickButton(){
    this.setState({ times: this.state.times + 1 });
  }

  render(){
    return (
      <div>
        <button onClick={() => this.clickButton()}> {this.state.times} likes </button>
      </div>
    )
  }
};

export default App;
