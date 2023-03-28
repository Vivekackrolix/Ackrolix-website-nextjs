import Link from 'next/link'
import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { IoMdCall, IoMdMail } from 'react-icons/io'

const FloatingButtons = () => {
  return (
    <div className=" fixed flex items-center justify-between py-5 top-60 z-50">

    <div className='bg-[#F6F8F9] p-3 rounded-md drop-shadow-lg'>
      <Link href="mailto:info@ackrolix.com">
        <IoMdMail size={24} className="text-black hover:text-primary"/>
        </Link>
        <hr className='mt-3 '/>
        <Link href="tel:+918178567042">
        <IoMdCall size={24} className="text-black hover:text-primary mt-3"/>
        </Link>
        <hr  className='mt-3 '/>
        <Link href="https://wa.me/918178567042 ">
        <FiMessageSquare size={24}  className="text-black hover:text-primary mt-3"/>
        </Link>
    </div>
    </div>
  )
}

export default FloatingButtons