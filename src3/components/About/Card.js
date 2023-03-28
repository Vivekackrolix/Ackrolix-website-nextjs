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
              Lorem ipsum dolor sit amet
              Eget at auctor purus
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Lorem ipsum dolor sit amet consectetur. Fermentum tortor et arcu
              pellentesque tempor cursus cursus amet odio. Orci eu sagittis leo
              duis enim mi massa etiam.
            </div>
            <div className="pt-4">
              <button className="bg-secondary hover:bg-primary text-white px-8 py-2 rounded-md flex items-center">
                <span className="text-base"> Contact Us </span>
                <MdKeyboardArrowRight className=" text-base text-white " />
              </button>
            </div>
          
        </div>
      </div>
        </div>
    </div>
  )
}

export default Card