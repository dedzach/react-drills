import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super();

    this.state={
      message: "",
      pokemonList: ["Pikachu", "Bulbasaur", "Charizard", "Squirtle", "Charmander"]
    }
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        
      </div>
    )
  }
}

export default App

