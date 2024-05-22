import React from 'react'

const TodoItems = () => {
    const deleteImg =`./src/png/bin1.png`
    const editImg = "./src/png/edit-icons.png"
    const saveImg = "./src/png/save-icons.png"

    const deleteBtn = () =>{
        
    }


  return (

    <li className='px-6 py-3 flex flex-wrap justify-between items-center border border-b-2 rounded-xl'>
        <div className='flex justify-center flex-nowrap  items-center border py-2 pr-1 pl-2 rounded-2xl border-black'>
            <input type="radio" name="" id="" className=' size-7 border-pink-300 border outline-none' />
            <input type="text" disabled placeholder='Task' className='rounded w-32 sm:w-60 lg:w-56 outline-none px-2  py-1 font-bold'/>
        </div>
        <div className='couser-pointer ml-1 gap-2 flex'>
          <button><img src={editImg} alt="edit"className='h-6' /></button>
          <button><img src={saveImg} alt="save"className='h-6' onChange={deleteBtn}/></button>
          <button><img src={deleteImg} alt="delete" className='h-6' /></button>
        </div>
    </li>
)
}

export default TodoItems;