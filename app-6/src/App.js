import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  constructor() {
    super();

    this.state={
      task: "",
      listArray: []
    }
    }

    handleInput = (task) => {
      this.setState({task})
    }

    handleAdd = () => {
        this.setState({listArray: [...this.state.listArray, this.state.task]})
      }

    
    
    render(){
      return(
      
        <div>
          <h1>My to-do list:</h1>
          <input onChange={e => this.handleInput(e.target.value)} type="text" />
          <button onClick={this.handleAdd}>Add</button>
          <div>
            {this.state.listArray.map((el) => (
              <div key={el}>
                {(el)}
              </div>
            ))}
          </div>
        </div>
      )
    }
  }


export default App;
