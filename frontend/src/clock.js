import React, { Component } from "react";
import "./clock.css";
import AnalogClock from "analog-clock-react";

class Clock extends Component {
  constructor(props) {
    super(props);
    //This creates the initial time object
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  //This will set the update interval to update the clock every second
  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }

//This section clears setInterval 
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  //This function set the state of the time to a new time
  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  render() {
    //set the options for the analog clock that gets displayed
    let options = {
      width: "50%",
      border: true,
      borderColor: document.body.style.color,
      baseColor: "#d3d3d3",
      centerColor: document.body.style.color,
      centerBorderColor: document.body.style.color,
      margin: "auto",
      handColors: {
        second: document.body.style.color,
        minute: document.body.style.color,
        hour: document.body.style.color,
      },
    };
    console.log(options["baseColor"]);
    return (
      //return the formatted analog clock and the digital clock
      <div
        className='timestuff'
        style={{
          justifyContent: "center",
          width: "70%",
          height: "70%",
        }}
      >
        <AnalogClock {...options} />
        <div className='Time'>{this.state.time}</div>
      </div>
    );
  }
}
//export it so that it can be called from the main app
export default Clock;
