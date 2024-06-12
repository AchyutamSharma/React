import React from "react";


 const Navbar = ()=>{
    return(
        
        <nav className=' flex justify-between py-2 px-5 leading-10 border-b xs:leading-6 lxs:px-2'>
          <h1 className='text-3xl font-bold xs:text-xl xxs:text-lg xxs:leading-9 lxs:text-base'>Akshutam.dev</h1>
          <ul className='flex gap-6 font-medium xs:gap-3 xs:font-normal xxs:gap-3 xxs:text-sm xxs:leading-9 lxs:text-xs lxs:gap-3 lxs:leading-6'>
            <li><a href="https://akshutam-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li><a href="#" target="_self" rel="noopener noreferrer">Project Sections</a></li>
          </ul>
        </nav>
    );
}

export default Navbar;