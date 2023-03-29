import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //let firstValue: string="Jack";
  //let firstValue: number="Jack";//error
  //let firstValue: number=12; //The value 12 is of number type!

let firstValue:Array<string>=["Jack","Evans"]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
        
      </header>
    </div>
  );
}

export default App;
