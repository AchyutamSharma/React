import React, {useEffect,useState} from "react";


const Timer = ()=>{

    const [Time,setTime] = useState(0);

    useEffect(()=>{
       const timer = setInterval(()=> setTime(Time+1),1000);
       console.log("SetInterval of ",timer);
       return function(){
        clearInterval(timer);
        console.log("Clear Old Interval",timer);
       }
    },[Time])

    return(
        <div>
            <h1>StopWatch</h1>
            <p>Current Time is {Time}</p>
            
        </div>

)
}

export default Timer;