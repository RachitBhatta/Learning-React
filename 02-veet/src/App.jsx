import { useState } from 'react'



function App() {
  let [counter,setCounter]=useState(0);
  // let counter =1;
  const addValue=()=>{
    
    setCounter(counter+1);

  }
  const removeVal=()=>{
    if (counter>0){

      setCounter(counter-1);
      

    }
  
  }
  

  return (
    <>
    <h1>Rachit aur Chai</h1>
    <h2>I am learning React</h2>
    <h2>Counter Value:{counter}</h2>
    <br />
    <button onClick={addValue}
    >Add value</button>
    <br />
    <button onClick={removeVal}>Delete Value</button>
    

      
    </>
  )
}

export default App
