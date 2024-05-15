import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from '../compo/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold bg-blue-800 text-black p-6 rounded-2xl">Tailwind</h1>
    <div className="flex-wrap flex gap-5 m-4 p-4 justify-center items-center">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
    
    </>
  )
}

export default App
