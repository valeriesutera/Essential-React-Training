import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

//you can only run one component unless you wrap componenets in divs
//A way to get around this is to use React.Fragment or just <></>

//first argument it takes in is the element we want to take in 
//second argument is where you want to put it in the index.html

// const [,,third] = ["boots","tent","lamp"];
// console.log(third);

ReactDOM.render(
  <App login="valeriesutera"/>,
  document.getElementById('root')
);

//jsx javascript as xml is a way to write tags directly in javascript ; babel is running behind the scenes to compile your code and add create element calls under the hood
