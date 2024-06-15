import { useContext } from 'react'
import './App.css'
import Counter from './Components/Counter'
import { CounterContext } from './context/Counter'
function App() {

  const counterState = useContext(CounterContext);

  console.log('counter Context ', counterState);

  return (
    <>
    <div className=' bg-slate-950 text-white h-screen text-center pt-16'>
      <h1>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>

    </>
  )
}

export default App
