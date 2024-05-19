import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const[length,setLength]= useState(8);
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("")
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%*-_=+[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char)
    
    }
    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])


  const passwordCopyToClipboard = useCallback(()=>{
      // this is for highlight the copy text for user.    
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numberAllowed,passwordGenerator])

  return (
      <div className='bg-black h-screen w-full text-white '>
        <div className=' px-6 py-4 mb-32 bg-gray-900 text-white text-3xl flex flex-row justify-between gap-4 font-mono'>
          <a href="https://akshutam-portfolio.vercel.app/">Akshutam.dev</a>
          <h1 className='px-4'>Password Generator</h1>
        </div>


        <div className='w-full mt-16 p-2 flex justify-center font-mono'>
          <input type="text" value={password} ref={passwordRef} placeholder='Password' className='w-96 p-2 rounded-l-xl h-12 text-black text-lg font-bold outline-none px-4'readOnly/>
          <button onClick={passwordCopyToClipboard} className='bg-blue-600 hover:bg-blue-900 px-6 text-xl  font-bold text-black rounded-r-2xl'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-6 justify-center mt-2'>
          <div className='flex items-center gap-x-4 text-xl'>
            <input type="range" min={6} max={32} value={length} onChange={(e)=>{setLength(e.target.value)}} className='cursor-pointer w-32'/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2 text-xl'>  
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=> !prev)}} />
            <label htmlFor='numberInput'> Number</label>
          </div>
          <div className='flex items-center gap-x-2 text-xl'>  
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>{setCharAllowed((prev)=> !prev)}}/>
            <label htmlFor='charInput'> Charater</label>
          </div>
        </div>
        </div>
)
}

export default App
