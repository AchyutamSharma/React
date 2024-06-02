import { useState } from 'react'
import Navbar from './component/Nav'
import Board from './component/Board'

function App() {

  return (
    <>
      <div className=" h-screen  bg-gray-900 text-center text-white">

      <Navbar/>
        <section>
          <Board/>
        </section>

      </div>
    </>
  )
}

export default App
