import React, {Component} from 'react'
import axios from 'axios';


export default class CatFacts extends Component {
    constructor(props) {
        super(props);
        //This declared the state of fact at the very beginning
        this.state ={
            fact: ""
            }
        //set the inital fact
        axios.get("/cat").then(res => {

            this.setState({
                fact:  res.data.fact
                })
        })
         
    }

    //set the update interval for how often to get a new fact
    componentDidMount = () =>{
        
        this.intervalID = setInterval(() =>
        this.updateFact(),
        10000
        );}

    //clear the value
    componentWillUnmount(){
        clearInterval(this.intervalID)
        }
    
    //Call the api to get a new cat fact
    updateFact(){
        axios.get("/cat").then(res => {

            this.setState({
                fact:  res.data.fact
                })
        })
     
        }

    render() {
        //return styled elements for widget title and the state which is the fact
        return <div className = "catfacts"style = {{
            justifyContent: 'center',
            width:'70%',
            height:'70%',
            margin:'2%',
            fontWeight:'bold'  
        }}>
            <h3>Cat Facts</h3>
            {this.state.fact}
            </div>
    }
}
