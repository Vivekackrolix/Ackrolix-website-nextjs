import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { IoMdCall, IoMdMail } from 'react-icons/io'

const FloatingButtons = () => {
  return (
    <div className=" fixed flex items-center justify-between py-5 top-60 z-50">

    <div className='bg-[#F6F8F9] p-4 rounded-md'>
        <IoMdMail size={28} className="text-black hover:text-primary"/>
        <hr className='mt-3 '/>
        <IoMdCall size={28} className="text-black hover:text-primary mt-3"/>
        <hr  className='mt-3 '/>
        <FiMessageSquare size={28}  className="text-black hover:text-primary mt-3"/>
    </div>
    </div>
  )
}

export default FloatingButtons