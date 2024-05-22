import React from 'react'

const AddTodoBtn = () => {
  return (
    <div>
      <div className='w-full flex flex-col gap-2 mt-5 justify-center items-center py-6'>
       <input type="text" className='h-10 text-xl px-2 py-2 font-bold rounded-lg '/>
          <button className=' w-60 bg-white text-black py-3 font-serif font-bold text-2xl rounded-lg items-center'>Add Todo</button>
      </div>
    </div>
  )
}

export default AddTodoBtn;