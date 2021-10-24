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

  handleChange(filter) {
    this.setState({ message: filter });
  }

  render() {
    let pokemonDisplay = this.state.pokemonList
      .filter((element) => {
      return element.toLowerCase().includes(this.state.message.toLowerCase());
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;

      })
      console.log(pokemonDisplay)
      console.log(this.state.message)
    return (
      <div className="App">
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        {pokemonDisplay}
      </div>
    )
  }
}

export default App

