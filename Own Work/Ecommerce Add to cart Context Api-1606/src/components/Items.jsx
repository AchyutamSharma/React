import React,{useContext} from "react";
import { CartContext } from "../context/Cart";

const Items = (props) =>{
    
    const cart = useContext(CartContext);
    console.log(cart);

    return(
        <div className=" font-medium border rounded-xl w-2/12 h-52 p-4 gap-3 flex flex-col text-center bg-zinc-950">
            <h4 className="text-2xl">{props.name}</h4>
            <p>Price : {props.price}$</p>
            <button onClick={()=> cart.setItems([...cart.items, {name: props.name, price : props.price},])} className="border py-2 px-4 text-sm font-medium mt-2">Add To Cart</button>
        </div>
    );
};

export default Items;