import axios from 'axios';
import React, {Component} from 'react'


export default class SetBackground extends Component {
    constructor() {
        super();
        this.state = {
            title: "no title",
            bgURL: ''
        }
    }

    componentDidMount = () =>{
        axios.get("/backend").then(res => {
            console.log(res)
            this.setState({
                title: res.data.title,
                bgURL: res.data.hdurl
            })
            document.body.style.backgroundImage = `url(${this.state.bgURL})`;
            document.body.style.backgroundRepeat = `no-repeat`;
            document.body.style.backgroundSize = `cover`;
            document.body.style.backgroundPosition = `center`;
            document.body.style.overflow = `hidden`;
        })

    };
    render() {
        return (
            <div style = {{
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                widith: '100vw'
            }}>
        </div>
        )
    }
}

