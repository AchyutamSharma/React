import React from "react";

const Header = (props) =>{
  return(
    <div className=' bg-white border rounded-xl px-10 py-3 text-center'>
    <h1 className='text-3xl font-bold'>{props.title}</h1>
  </div>
  )
}

export default Header;
