import React,{useState,useEffect} from "react";

const Square = (props)=>{
    
    
    return(
        <div onClick={props.onClick} className=" cursor-pointer h-36 w-36 border text-3xl p-1 flex justify-center items-center">
            <h4>{props.value}</h4>
        </div>
    );
};

export default Square;