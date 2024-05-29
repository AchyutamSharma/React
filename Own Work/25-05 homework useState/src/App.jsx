import { useState,useEffect } from 'react'
import Timer from './Timer';

function App() {

  let [count,setCount] = useState(0);
  let [count2,setCount2] = useState(0);
  
  useEffect(()=>{
    console.log("Components is mounting......"); 
    
    return function () {
      console.log("Unmounting.....");
    };
  },[]);
  
  useEffect(()=>{
    console.log("This is for count2",count2);

    return function(){
      console.log("returning count ",count2);
    }

  },[count2]);
  

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

  let [isVisible,setVisible] = useState(true);

return (
  <>
    {isVisible? <div>
     <h1>Count component :- {count}</h1>
     <h3> The number is {count%2 === 0 ? "Even" : "Odd"}.</h3>
     <div className="btn">
        <button type="button" onClick={onIncrease} >Increase</button>
        <button type="button" onClick={onDecrease}>Decrease</button>
     </div>
     <h1>Count 2 compo: {count2}</h1>
        <button onClick={ ()=> setCount2(++count2)} >Increase</button>
        <button type="button" onClick={()=> count2==0?setCount2(0):setCount2(--count2)}>Decrease</button>
    </div> : <></>}
      <button type="button" onClick={()=> setVisible(!isVisible)} >Toggle</button>
      <Timer/>
  </>
  )
}

export default App;