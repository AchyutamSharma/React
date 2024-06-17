import React,{useContext} from "react";
import {CartContext} from "../context/Cart"
const Cart = () =>{
    
    const cart = useContext(CartContext);
    const total = cart.items.reduce((a, b) => a + b.price, "");
    return(
        <div className="flex gap-5 flex-col text-center mt-10 border rounded-xl w-2/12 p-2 ">
            <h1>Cart</h1>
            {cart && cart.items.map((item)=> <li>{item.name} - ${item.price}</li> )}
            <h4>Total Bill : ${total}</h4>
        </div>
    )
}

export default Cart;