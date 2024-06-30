import React from 'react'

const AddyourOwn = () => {
   
  return (
    <div className='flex flex-row justify-center mt-[6rem] bg-[#F7FDFF] '>
      <div className="w-[85%] border-[1px] mt-[6rem] mb-[6rem] bg-white rounded-[8px] p-6 md:p-8 lg:p-12">
        <div className="flex items-center mb-4 gap-4">
          <div className='rounded-full w-8 h-8 flex justify-center items-center bg-blue-400'>
             <span className="text-white  text-2xl font-bold mb-1 ">+</span>
          </div>
          <h2 className="text-gray-800 text-xl font-bold md:text-2xl lg:text-3xl">
            Add your own
          </h2>
        </div>
        <p className="text-gray-600 mt-10 text-sm md:text-base lg:text-lg">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <button className='py-2 mt-10 px-5 rounded-[8px] border-2 border-[#8064A2] text-[#8064A2]'>
          Add new
        </button>
      </div>
    </div>
  )
}
export default AddyourOwn