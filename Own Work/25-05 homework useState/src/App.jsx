import { useState } from 'react'

function App() {

  let [count,setCount] = useState(0);

  const onIncrease = () =>{
    setCount(count+1);
  }
  const onDecrease = () =>{
    if(count >=1){
      setCount(count-1);
    }else{
      setCount(0)
    }
  }


return (
  <>
    <div>
     <h1>Count component :- {count}</h1>
     <h3> The number is {count%2 === 0 ? "Even" : "Odd"}.</h3>
     <div className="btn">
        <button type="button" onClick={onIncrease} >Increase</button>
        <button type="button" onClick={onDecrease}>Decrease</button>
     </div>
    </div>
  </>
  )
}

export default App;