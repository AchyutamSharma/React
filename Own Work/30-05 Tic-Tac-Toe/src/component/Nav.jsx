import React from "react";


 function Navbar(){
    return(
        
        <nav className=' flex justify-between py-2 px-5 leading-10 border-b xs:leading-6 '>
          <h1 className='text-3xl font-bold xs:text-xl xxs:text-lg xxs:leading-9'>Akshutam.dev</h1>
          <ul className='flex gap-6 font-medium xs:gap-3 xs:font-normal xxs:gap-3 xxs:text-sm xxs:leading-9'>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">Project Sections</a></li>
          </ul>
        </nav>
    );
}

export default Navbar;