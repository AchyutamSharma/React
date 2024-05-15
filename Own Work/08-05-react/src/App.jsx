import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let counter = 15

  let addToggler;
  let removeToggler;
    if(counter === 0){
      addToggler = false
      removeToggler = true
    }else if(counter >= 0){
      removeToggler = false
    }

  let addValue = ()=>{
  console.log("Before Add Value",counter)
  // counter = counter + 1
  setCounter(counter+1) 
  console.log("After add value",counter)
  }
  
  let removeValue = () =>{
  
    console.log("before remove value",counter)
  // counter = counter - 1 
  setCounter(counter-1)
  console.log("After remove value",counter)
  }

  return (
    <>
      <h1>Here is new page of react</h1>  
      <h4>Details:- Here we use vite react in this project.</h4>
      <br />
      
      <h2>Counter Value : {counter}</h2>
      <button disabled = {addToggler} onClick={addValue}>Add Value</button>
      <br />
      <button disabled = {removeToggler} onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
