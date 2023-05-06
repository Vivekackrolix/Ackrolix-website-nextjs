import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Card = () => {
  return (
    <div className='bg-[#F6F8F9] py-16  md:px-0 px-5 '>
        <div className='container-ack bg-white drop-shadow-md rounded-lg '>
        <div className="grid md:grid-cols-2 gap-6 items-center container-ack ">
        <div className=" ">
          <img src="/assets/images/aboutusimg2.png" alt="" />
        </div>

        <div className=" md:px-16 px-5 pb-10 md:pb-0">
          
          
            <div className="text-3xl font-bold   ">
              We're committed to deliver high quality projects
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
             We recognize that every business is unique, with its own specific needs and challenges. That's why we take a tailored approach to every project, working closely with our clients to develop customized solutions that meet their specific requirements. 
            </div>

            <div className="flex justify-start pb-10 pt-5">
        <Link href="/contact">
          <button className=" button-2  px-12 py-2 rounded-md">
            <div className="eff-2"></div>
            <span className="text-base flex items-center ">
              {" "}
              Contact Us
              <MdKeyboardArrowRight className=" text-base" />
            </span>
          </button>
        </Link>
      </div>
          
        </div>
      </div>
        </div>
    </div>
  )
}

export default Card