import { createContext,useState } from 'react';

export const CounterContext = createContext(null);

export const CounterProvider = (props) =>{
    const [count,setCount] = useState(5);
    return(
        <CounterContext.Provider value={{ count, name:'Akshutam Sharma', setCount }}>{props.children}</CounterContext.Provider>
    )
}