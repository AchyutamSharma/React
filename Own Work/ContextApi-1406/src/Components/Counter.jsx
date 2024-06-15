import React,{useContext} from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
    const counterContext = useContext(CounterContext);

    
    return(
        <div className="flex justify-center gap-10 mt-10">
            <button onClick={()=> counterContext.setCount(counterContext.count + 1)} className="border py-2 px-5 rounded-xl hover:bg-white hover:text-black font-semibold">Increment</button>
            <button onClick={()=> counterContext.count === 0 ? counterContext.setCount(0) : counterContext.setCount(counterContext.count - 1)} className="border py-2 px-5 rounded-xl hover:bg-white hover:text-black font-semibold">Decrement</button>
        </div>
    );
};

export default Counter;