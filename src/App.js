import './App.css';
import React, {useState, useEffect} from "react";

//https://api.github.com/users/valeriesutera


//we create a component by creating a function that returns jsx (this ui element we can add to the DOM)
function App({login}) {
  console.log({login})
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  },[login]);

  if(loading) return <h1>Loading...</h1>
  if(error)
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if(!data) return null;

  if(data){
    return<div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url}/>
    </div>
  }
  return<div> No User Available</div>

}

export default App; //this means it has to be imported
