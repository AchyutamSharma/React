import React,{useEffect,useState} from "react";
import Square from "./Square";

const Board = () =>{
    
    let [isXTurn,setIsXTurn] = useState(true)
    let [state,setState] = useState(Array(9).fill(null))

    const checkWinner = () =>{
        const winnerLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for( let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[b] === state[c]){
                Square
                return state[a];
            }
        }
        return false;
    };

    let isWinner = checkWinner();


    const handler = (index)=>{
        if(state[index] !== null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const handleReset = ()=>{
         setState(Array(9).fill(null))
         Square.onClick = true;
    }

    return(
        <div className="board-container mt-8">
            <div className="text-3xl mb-6 font-semibold"><h1>Player {isXTurn ? "X" : "O" } Moves.</h1></div>
            
            <div className="board-row flex justify-center px-4">
                <Square onClick={()=>handler(0)} value={state[0]}/>
                <Square onClick={()=>handler(1)} value={state[1]} />
                <Square onClick={()=>handler(2)} value={state[2]}/>
            </div>
            <div className="board-row flex justify-center px-4">
                <Square onClick={()=>handler(3)} value={state[3]}/>
                <Square onClick={()=>handler(4)} value={state[4]}/>
                <Square onClick={()=>handler(5)} value={state[5]}/>
            </div>
            <div className="board-row flex justify-center px-4">
                <Square onClick={()=>handler(6)} value={state[6]}/>
                <Square onClick={()=>handler(7)} value={state[7]}/>
                <Square onClick={()=>handler(8)} value={state[8]}/>
            </div>
           {isWinner ? ( 
          <div>
            <h1 className="text-4xl text-green-500 font-semibold mt-3 mb-2 ">'{isWinner}' Won the Game </h1> 
            <button onClick={handleReset} className="text-xl font-semibold mt-3 border py-1 px-4 rounded-lg hover:bg-white hover:text-black" type="button">Play Again</button>
          </div>
          ):""}
        </div>
    );
};

export default Board;
