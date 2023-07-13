import React from 'react'

const AboutPage = () => {
  return (
    <div
      className="h-screen bg-right"
      style={{
        backgroundImage: 'url("/assets/images/mainbackground.png ")',
      }}
    >
      <div className="md:grid grid-cols-2 gap-6 items-center container-ack  ">
        <div className="pb-5 pt-10 ">
          <img src="/assets/images/aboutpage/aboutpage.png" alt="" />
        </div>

        <div className=" md:px-0 px-5 pb-10 md:pb-0  relative">
        <div className="dynamic-text  " data-content="About">
              
              </div>
          
          <div className="">
            <div className="text-[46px] max-[480px]:text-[30px] text-secondary relative bottom-[18px] z-10 font-bold">
            Why <span className="text-primary"> Ackrolix Innovations ? </span> 
            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  pb-4">
            Ackrolix Innovations is a full-service digital marketing agency. We’ve been providing a wide range of services to clients of all industries since 2005. Our digital marketing services include consulting and management options for a variety of online marketing tactics including search engine optimization (SEO), pay-per-click (PPC) ads, Amazon store optimization, copywriting, conversion rate optimization (CRO), and more. We also offer expert web design and development services for both eCommerce and B2B companies. Don’t just partner with any digital marketing agency; work with a company you can trust.

            </div>
            <div className="md:w-[95%] w-full text-base text-textcolor text-justify font-text  py-4">
              Ackrolix is known for its innovative approach, teamwork, and commitment to excellence.
              Our only goal is to deliver the best solutions and meet the clients needs, and help them achieve their goals.
            </div>
          </div>
        </div>
      </div>

      <div className=" grid md:grid-cols-12 md:gap-0 gap-4 justify-center container-ack pt-8">
        <div className="md:col-span-3 flex flex-col  items-center">
          <p className=" text-2xl font-bold text-secondary"> 1056+</p>
          <p>Projects Completed</p>
        </div>
        <div className=" md:col-span-3 flex flex-col items-center">
          <p className=" text-2xl font-bold text-secondary"> 50+</p>
          <p>Active Clients</p>
        </div>
        <div className="md:col-span-3 flex flex-col items-center">
          <p className=" text-2xl font-bold text-secondary">740+ </p>
          <p>Cups of Coffee</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage