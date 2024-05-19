import { useState } from 'react'

function App() {
const [color,setColor] = useState("#212121")
  return (

    <div className='w-full h-screen duration-150' style={{backgroundColor:color}}>


        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl shadow-lg border border-1 border-gray-500 text-lg'>
            <button type="button" className='outline-none btn  px-4 py-2 border rounded-2xl border-neutral-700 bg-red-600 text-white' onClick={()=> setColor("#dc2626")}>Red</button>
            <button type="button" className='outline-none btn  px-4 py-2 border rounded-2xl border-neutral-700 bg-green-500 text-white' onClick={()=>setColor("#22c55e")}>Green</button>
            <button type="button" className='outline-none btn  px-4 py-2 border rounded-2xl border-neutral-700 bg-blue-900 text-white' onClick={()=>setColor("#1e3a8a")}>Blue</button>
            <button type="button" className='outline-none btn  px-4 py-2 border rounded-2xl border-neutral-700 bg-white text-black' onClick={()=>setColor("White")}>White</button>
            <button type="button" className='outline-none btn  px-4 py-2 border rounded-2xl border-neutral-700 bg-violet-300 text-black' onClick={()=>setColor("#c4b5fd")}>Lavender</button>
            <button type="button" className='outline-none btn  px-4 py-2 border rounded-2xl border-neutral-700 bg-zinc-900 text-white' onClick={()=>setColor("#18181b")}>Dark</button>
            <button type="button" className='outline-none btn  px-4 py-2 border rounded-2xl border-neutral-700 bg-sky-400 text-black' onClick={()=>setColor("#38bdf8")}>Sky Blue</button>
            <button type="button" className='outline-none btn  px-4 py-2 border rounded-2xl border-neutral-700 bg-pink-500 text-white' onClick={()=>setColor("#ec4899")}>Pink</button>
          </div>
        </div>
    </div>
  )
}

export default App
