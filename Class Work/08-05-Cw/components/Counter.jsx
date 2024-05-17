import React, {useState} from 'react'

const Counter = () => {
    
    const [counter,setcounter] = useState(0);
    
    const handleclick = (value) => {
            const newValue = counter + value;
            if (newValue <= 0) {
                setcounter(0)
            }else{
                setcounter(newValue);
            }
    }
    return (
    <React.Fragment>
        <section className='border flex flex-col justify-center items-center gap-6  w-96 h-96 p-6 shadow rounded-xl  bg-gray-500'>
         <div className='w-72 h-72 border rounded-xl border-gray-400 bg-gray-900 flex items-center justify-center text-7xl' >
            {counter}
         </div>
         <div className='flex gap-4'>
                <button onClick={() => handleclick(1)} className=' bg-sky-600 text-white border border-sky-700 rounded-xl px-8 py-2 text-xl hover:bg-sky-700 transition duration-150'>Increase</button>
                <button onClick={() => handleclick(-1)} className='bg-sky-600 text-white border border-sky-700 rounded-xl px-8 py-2 text-xl hover:bg-sky-700 transition duration-150'>Decrease</button>
            </div>
     </section>
    </React.Fragment>
  )
}

export default Counter;