import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state={
      password: "",
      username: "",
    }
  }

handleUsername = (username) => {
  this.setState({username})
}

handlePassword = (password) => {
  this.setState({password})
}

render () {
    console.log(this.state)
    return (
      <div className="App">
        <input onChange={e => this.handleUsername(e.target.value)} type="text" />
        <input onChange={e => this.handlePassword(e.target.value)} type="text" />
        <button onClick={() => alert(`Username:${this.state.username} Password:${this.state.password}`)}>Submit</button>
      </div>
    );
  };
};




export default App;
