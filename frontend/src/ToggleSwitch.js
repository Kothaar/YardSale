import React, { Component } from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    
    if(this.state.isToggleOn === false){
      document.body.style.color = "black";
      document.body.style.backgroundColor = "black";

    }
    else{
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    }
    }


  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
