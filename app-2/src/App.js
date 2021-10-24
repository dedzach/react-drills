import React, { Component } from "react";

import "./App.css";

export class App extends Component {
  constructor() {
    super();

    this.state={
      objectArray: ["one", "two", "three", "four"],
      brandsArray: ["Razer", "MSI", "HyperX", "Pokemon"]
    };
  }

  render() {
    let objectList = this.state.brandsArray.map((element, index) => {
      return <h2 key={index}>{element}</h2>;

      // I need to ask question about the functionality of the above code. Not sure why it's written the way it is.
  
    });

    return <div className="App">{objectList}</div>;
  
  }
}

export default App;
