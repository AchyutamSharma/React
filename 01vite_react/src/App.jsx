import { useState } from 'react'
import Chai from './myCode'


function App() {
  const username = "Akshutam"

  return (
    // this is called fragement
    <>
    <p>Page Created by {username}</p>
    <h1> <a href="https://akshutam-portfolio.vercel.app/">Akshutam dev.</a></h1>
    <Chai/>
    </>
  )
}

export default App
