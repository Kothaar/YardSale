import React, { Component } from 'react';
import './clock.css';
import AnalogClock from 'analog-clock-react';

class Clock extends Component {
constructor(props){
super(props);
//This declared the state of time at the very beginning
this.state ={
time: new Date().toLocaleTimeString()
}
}

//This happens when the component mount and the setInterval function get called with a call back function updateClock()
componentDidMount() {
this.intervalID = setInterval(() =>
this.updateClock(),
1000
);}

//This section clears setInterval by calling intervalID so as to optimise memory
componentWillUnmount(){
clearInterval(this.intervalID)
}

//This function set the state of the time to a new time
updateClock(){
this.setState({
time: new Date().toLocaleTimeString()
});
}
render() {
    let options = {
        width: "50%",
        border: true,
        borderColor: document.body.style.color,
        baseColor:'#d3d3d3',
        centerColor: document.body.style.color,
        centerBorderColor: document.body.style.color,
        margin: 'auto',
        handColors: {
          second: document.body.style.color,
          minute: document.body.style.color,
          hour: document.body.style.color
        }
       
    };
    console.log(options['baseColor'])
return (
    <div style = {{
        justifyContent: 'center',
        marginTop: '10%'
        
        
    }}>
<AnalogClock {...options} />
<div className="Time">

    {this.state.time}
</div>
</div>
);}
}
export default Clock;