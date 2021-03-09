import axios from 'axios';
import React, {Component} from 'react'


export default class SetBackground extends Component {
    constructor() {
        super();
        this.state = {
            title: "no title",
            bgURL: '',
            copyright: '',
        }
    }

    componentDidMount = () =>{
        axios.get("/backend").then(res => {
            console.log(res)
            this.setState({
                title: res.data.title,
                bgURL: res.data.hdurl,
                copyright: res.data.copyright,
            })
            document.body.style.backgroundImage = `url(${this.state.bgURL})`;
            document.body.style.backgroundRepeat = `no-repeat`;
            document.body.style.backgroundSize = `cover`;
            document.body.style.backgroundPosition = `center`;
            document.body.style.overflow = `hidden`;
            document.body.style.color = 'white';
            document.body.style.fontFamily = 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif';
        })

    };
    render() {
        return (
            <div>
        </div>
        )
    }
}

