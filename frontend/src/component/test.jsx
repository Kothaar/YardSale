import React, {Component} from 'react';

class bakground extends Component {
    componentWillMount(){
        document.body.style.backgroundColor = 'black';
    }
    componentDidMount(){
        document.body.style.backgroundColor = 'black';
    }
    render(){
        return (
            <div className='App'>
                <h1> React DOM</h1>
            </div>
        )
    }
}


export default bakground