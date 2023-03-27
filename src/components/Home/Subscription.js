import React from 'react'

const Subscription = () => {
  return (
    <div className='container-ack'>
        <div className='bg-black rounded-md grid md:grid-cols-12 py-8 px-7'>
                <div className='md:col-span-7'>
 <p className='font-semibold text-white text-3xl'>Subscribe To get updated</p>
<p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.</p>
                </div>
                <div className='md:col-span-5 md:pt-0 pt-5'>
                <div className='md:flex space-x-3 justify-between'>
                    <div className=''>
                    <input
                type="text"
                placeholder="Enter your email"
                className="  outline-none p-2  text-white bg-transparent border border-white w-full rounded-md placeholder:text-white px-4"
              />
                    </div>
                <div className=" md:flex justify-end md:pt-0 pt-5">
      <button className=" py-2 px-5 rounded-md bg-white text-black font-semibold hover:bg-primary">
            Contact Us
          </button>
      </div>
                </div>
                </div>
                 </div>
    </div>
  )
}

export default Subscription