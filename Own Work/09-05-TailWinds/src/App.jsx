import { useState } from 'react'
import './App.css'
import Cards from '../compo/Cards'

function App() {
  let myObj1 = {
    name: "Akshutam",
    dob:"12/08/2001",
    about:`Hey, I am Akshutam from Bangalore,Recently completed my Bachelor degree`,
  }
  let myObj2={
    name:"Puneet",
    dob:"12/04/2003",
    about:`Hey, I am Punnet from Bangalore,Recently completed my Bachelor degree`,
  }
  let myAge = [23,21]
  return (
    <>
    <h1 className="text-3xl font-bold bg-blue-800 text-black p-6 rounded-2xl">Tailwind</h1>
    <div className="flex-wrap flex gap-5 m-4 p-4 justify-center items-center">
    <Cards name ={myObj1.name} dob={myObj1.dob} about={myObj1.about} age={myAge[0]} btntxt = "Click Me"/>
    <Cards name ={myObj2.name} dob={myObj2.dob} about={myObj2.about} age={myAge[1]} />
    </div>
    
    </>
  )
}

export default App
