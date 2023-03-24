import React from 'react'

const Heading = ({titletext,title,subtext}) => {
  return (
    <div className='container-ack md:pt-0 md:pb-0 pt-10 pb-5'>
 <div className="relative">
        <div className="md:text-[12rem] text-[5rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
       {titletext}
        </div>
        <div className="absolute md:top-[11.5rem] top-[4rem] md:left-[31rem] left-[8rem]">
          <div className="text-3xl  text-center font-bold ">{title}</div>
          
        </div>
      </div>
      <p className="text-base text-center w-[80%] mx-auto ">
    {subtext}   
          </p>
    </div>
  )
}

export default Heading