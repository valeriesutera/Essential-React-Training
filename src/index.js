import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

//first argument it takes in is the element we want to take in 
//second argument is where you want to put it in the index.html
ReactDOM.render(
  //React.createElement("h1",{style:{color:"blue"}}, "Heyy everyone"), //using javascript to create html elements; 2nd element is a property
  // <ul>
  //   <li>Monday</li>
  //   <li>Tuesday</li>
  // </ul>
  <App />,
  document.getElementById('root')
);

//jsx javascript as xml is a way to write tags directly in javascript ; babel is running behind the scenes to compile your code and add create element calls under the hood
