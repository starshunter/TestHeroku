import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

// const API_ROOT = 'http://localhost:4000'
// const instance = axios.create({
//   baseURL: API_ROOT,
//   withCredentials: true
// })

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {msg: ''}
    }
    componentDidMount() {
        this.getMsg();
    }
    getMsg = async() => {
        try {
            const {data} = await axios.post('/');
            this.setState({msg: data})
        } catch(error) {
            console.log('An error had occurred' + error);
        }
    }
    render() {
        return (
            <div className="App">
                <div>Hello</div>
                <div>{this.state.msg}</div>
            </div>
        );
    }
}

export default App;
