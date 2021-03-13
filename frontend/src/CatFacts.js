import React, { Component } from "react";
import axios from "axios";

export default class CatFacts extends Component {
  constructor(props) {
    super(props);
    //This declared the state of fact at the very beginning
    this.state = {
      fact: "",
    };
    axios.get("/cat").then((res) => {
      this.setState({
        fact: res.data.fact,
      });
    });
  }

  componentDidMount = () => {
    this.intervalID = setInterval(() => this.updateFact(), 10000);
  };

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateFact() {
    axios.get("/cat").then((res) => {
      this.setState({
        fact: res.data.fact,
      });
    });
  }

  render() {
    return (
      <div
        className='catfacts'
        style={{
          justifyContent: "center",
          width: "70%",
          height: "70%",
          margin: "2%",
          fontWeight: "bold",
        }}
      >
        <h3>Cat Facts</h3>
        {this.state.fact}
      </div>
    );
  }
}
