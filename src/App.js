import './App.css';
import React, {useState, useEffect} from "react";

//we create a component by creating a function that returns jsx (this ui element we can add to the DOM)
function App() {
  const [emo, setEmo] = useState("happy");
  const[secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log('we are feeling', emo);
  },[emo]);

  useEffect(() => {
    console.log('we are feeling', secondary);
  },[secondary]);

  return(
    <>
      <h1> current emotion is {emo} and {secondary} </h1>
      <button onClick={() => setEmo("frustrated")}> Frustrate
      </button>
      <button onClick={() => setEmo("enthusiastic")}> Enthuse
      </button>
      <button onClick={() => setEmo("happy")}> Happy
      </button>
      <button onClick={() => setSecondary("Crabby")}> Crabby
      </button>
    </>
  )

}

export default App; //this means it has to be imported
