import React,{useState,useEffect} from "react";

const Square = ()=>{
    
    let [count,setCount] = useState(0)
    let [state,setState] = useState(Array(9).fill(null))

        console.log("State = ",state)

   

    return(
        <div className=" h-36 w-36 border text-3xl p-1 flex justify-center items-center">
            <h4>{count}</h4>
        </div>
    );
};

export default Square;