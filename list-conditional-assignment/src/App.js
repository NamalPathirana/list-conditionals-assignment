import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    inputLenght:'',
  };

  inputChangeHandler = (event) => {

    let inputArray = event.target.value.split('');
    const length = inputArray.length;

    this.setState({
      inputLength:length
    });
  }

  render() {
    return (
      <div className="App">
        
        <input onChange ={(event)=>this.inputChangeHandler(event)}/>
        <p>The length of the paragraph : {this.state.inputLength}</p>

      </div>
    );
  }
}

export default App;
