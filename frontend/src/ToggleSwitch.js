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
      var boxes = document.getElementsByClassName("widget");
      for(var i = 0; i< boxes.length; ++i){
        boxes[i].style.backgroundColor = "rgba(255, 255, 255,0.2)";
        
        boxes[i].style.border = "3px solid white";
      }

    }
    else{
      document.body.style.color = "white";
      var divs = document.getElementsByClassName("widget");
      for(var j = 0; j< divs.length; ++j){
        divs[j].style.backgroundColor = "rgba(0, 0, 0,0.2)";
        divs[j].style.border = "3px solid black";
      }
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
