import axios from 'axios';
import React, {Component} from 'react'


export default class TalkToBackend extends Component {
    constructor() {
        super();
        this.state = {
            backend: "Not talking to backend"
        }
    }

    handleButtonClick = () =>{
        axios.get("/backend").then(res => {
            console.log(res)
            this.setState({
                backend: res.data.backend
            })
        })

    };
    render() {
        return (
            <div>
                <h1> Testing Backend</h1>
                <button onClick={this.handleButtonClick} >Talk to backedn</button>
                <h2> Testing: {this.state.backend}</h2>

            </div>
        )
    }
}

