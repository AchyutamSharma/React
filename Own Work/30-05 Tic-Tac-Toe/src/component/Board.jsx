import React from "react";
import Square from "./Square";

const Board = () =>{
    return(
        <div className="board-container mt-14">
            <div className="board-row flex justify-evenly gap-4 px-4 py-2">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row flex justify-evenly gap-4 px-4 py-2">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row flex justify-evenly gap-4 px-4 py-2">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    );
};

export default Board;
