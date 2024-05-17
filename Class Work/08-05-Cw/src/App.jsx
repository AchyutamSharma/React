import React from 'react'
import { Counter } from "../components";

const App = () => {
  return (
    <>
    <div className='mx-0 p-3 bg-gray-900 text-white text-2xl'>
        <a href="https://akshutam-portfolio.vercel.app/">Akshutam.dev</a>
      </div>
    <div className=' mx-auto p-3 bg-gray-600 text-white h-screen w-full grid place-content-center'>
      <Counter />
    </div>
    </>
  )
}

export default App;