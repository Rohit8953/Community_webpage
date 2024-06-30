import React from 'react'
import image from '../End/image.png'

const End = () => {
  return (
    <div className=' w-full mt-[6rem] flex flex-row justify-center bg-[#F7FDFF]'>
        <div className='flex flex-col gap-8 mt-[4rem] w-[85%] '>
            <div>
                <i className='text-3xl font-[500]'>Your <span className='text-[#8064A2]'>Hobby</span>, Your <span className='text-[#0096C8]'>Community...</span></i>
            </div>
            <div>
                <button className='p-2 px-5 text-white rounded-[8px] bg-[#8064A2] hover:bg-purple-400 transition-all duration-200'>Get Start</button>
            </div>
            <div>
                <img src={image} className=' object-cover' alt="" />
            </div>
        </div>
    </div>
  )
}

export default End