import { useState } from 'react';
import Items from './components/Items';
import Cart from './components/Cart';

function App() {

  return (
    <section className='h-screen bg-gray-950 text-white'>
      <div className='  bg-gray-950'>
        <h3 className=' text-center p-5 text-2xl font-semibold'>Items</h3>
      <div className='  p-2 flex justify-center gap-5'>

        <Items name="Victus" price="85,000"/>
        <Items name="Hp Pavilion" price="75,000"/>
        <Items name="MacBook Pro" price="99,000"/>
        <Items name="Lenovo LOQ" price="1,50,000"/>
      </div>
      <div className='flex flex-col items-center'>
        <Cart/>
      </div>
      </div>
    </section>
  )
}

export default App
